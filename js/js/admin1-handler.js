// admin1-handler.js

// Verificar autenticación
firebase.auth().onAuthStateChanged(user => {
  if (!user) window.location.href = "login.html";
});

// Mostrar información del usuario
/*const email = localStorage.getItem("userEmail");
const role = localStorage.getItem("userRole");
if (email && role) {
  document.getElementById("user-info").innerHTML = `<strong>${email}</strong><br>Rol: ${role}`;
}*/

// Referencia a la colección de productos
const dbRef = firebase.firestore().collection("products");

// Elementos del DOM
const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const addProductBtn = document.getElementById("add-product");
const productModal = document.getElementById("product-modal");
const productForm = document.getElementById("product-form");
const cancelBtn = document.getElementById("cancel-btn");
const modalTitle = document.getElementById("modal-title");

// Variables de estado
let allProducts = [];
let editing = false;
let currentProductId = null;

// Elementos para la carga de JSON
const uploadJsonBtn = document.getElementById("upload-json");
const jsonFileInput = document.getElementById("json-file");

// Evento para abrir el selector de archivos
uploadJsonBtn.addEventListener("click", () => {
  jsonFileInput.click();
});

// Evento para procesar el archivo JSON seleccionado
jsonFileInput.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  if (!confirm("¿Estás seguro de que deseas cargar estos productos? Esto sobrescribirá cualquier producto existente con los mismos IDs.")) {
    jsonFileInput.value = ""; // Resetear el input
    return;
  }

  try {
    const jsonData = await readFileAsJson(file);
    await uploadProductsFromJson(jsonData);
    jsonFileInput.value = ""; // Resetear el input después de la carga
    alert("Productos cargados exitosamente!");
    loadProducts(); // Actualizar la lista
  } catch (error) {
    console.error("Error al cargar el JSON:", error);
    alert("Error al cargar el archivo JSON");
    jsonFileInput.value = ""; // Resetear el input en caso de error
  }
});

// Función para leer el archivo JSON
function readFileAsJson(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonData = JSON.parse(event.target.result);
        resolve(jsonData);
      } catch (error) {
        reject(new Error("El archivo no es un JSON válido"));
      }
    };
    reader.onerror = () => reject(new Error("Error al leer el archivo"));
    reader.readAsText(file);
  });
}

// Función para subir los productos del JSON a Firestore
async function uploadProductsFromJson(products) {
  const batch = firebase.firestore().batch();
  
  // Limitar el batch a 500 operaciones (límite de Firebase)
  const batchLimit = 500;
  let currentBatchSize = 0;
  let batchCount = 0;
  
  for (const product of products) {
    const productRef = dbRef.doc(product.id);
    batch.set(productRef, product);
    currentBatchSize++;
    
    // Si alcanzamos el límite, ejecutamos el batch y creamos uno nuevo
    if (currentBatchSize >= batchLimit) {
      await batch.commit();
      currentBatchSize = 0;
      batchCount++;
      console.log(`Batch ${batchCount} committed`);
    }
  }
  
  // Ejecutar el batch final si hay operaciones pendientes
  if (currentBatchSize > 0) {
    await batch.commit();
    console.log(`Final batch committed`);
  }
}

// Cargar productos desde Firestore
async function loadProducts() {
  try {
    const snapshot = await dbRef.get();
    allProducts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    renderProducts();
  } catch (error) {
    console.error("Error al cargar productos:", error);
    alert("Error al cargar los productos");
  }
}

// Renderizar productos en la lista
function renderProducts() {
  const term = searchInput.value.toLowerCase();
  const filter = filterSelect.value;

  productList.innerHTML = "";

  const filtered = allProducts.filter(p => {
    const matchSearch = p.name?.toLowerCase().includes(term) || 
                       p.brand?.toLowerCase().includes(term) ||
                       p.type?.toLowerCase().includes(term);
    const matchFilter = filter === "all" ||
                       (filter === "available" && p.available) ||
                       (filter === "unavailable" && !p.available);
    return matchSearch && matchFilter;
  });

  if (filtered.length === 0) {
    productList.innerHTML = "<p class='text-center py-4'>No se encontraron productos.</p>";
    return;
  }

  filtered.forEach(prod => {
    const div = document.createElement("div");
    div.className = "product-card";

    div.innerHTML = `
      ${prod.image ? `<img src="img/${prod.brand}/${prod.image}" alt="${prod.name}" class="w-full h-48 object-contain mb-2">` : '<div class="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center mb-2"><span class="text-gray-500">Sin imagen</span></div>'}
      <h3>${prod.name}</h3>
      <p><strong>Marca:</strong> ${prod.brand || "N/A"} - ${prod.type || "N/A"}</p>
      <p class="text-sm text-gray-400 my-2">${prod.description || ""}</p>
      <p><strong>Precio:</strong> S/ ${prod.price?.toFixed(2) || "0.00"}</p>
      ${prod.offerprice ? `<p><strong>Oferta:</strong> S/ ${prod.offerprice.toFixed(2)}</p>` : ''}
      
      <div class="status-label ${prod.available ? "available" : "unavailable"}">
        ${prod.available ? "Disponible" : "Agotado"}
      </div>
      
      ${prod.tag ? `<div class="tag">${prod.tag}</div>` : ""}
      
      <div class="switch-container">
        <span class="switch-label">Disponibilidad:</span>
        <label class="switch">
          <input type="checkbox" ${prod.available ? "checked" : ""} onchange="toggleAvailable('${prod.id}')">
          <span class="slider"></span>
        </label>
      </div>
      
      <div class="btn-group">
        <button class="bg-primary" onclick="editProduct('${prod.id}')">Editar</button>
        <button class="bg-danger" onclick="deleteProduct('${prod.id}')">Eliminar</button>
      </div>
    `;
    productList.appendChild(div);
  });
}

// Event listeners
searchInput.addEventListener("input", renderProducts);
filterSelect.addEventListener("change", renderProducts);

// Abrir modal para agregar producto
addProductBtn.addEventListener("click", () => {
  editing = false;
  currentProductId = null;
  productForm.reset();
  modalTitle.textContent = "Agregar producto";
  productModal.classList.add("active");
});

// Cerrar modal
cancelBtn.addEventListener("click", () => {
  productModal.classList.remove("active");
  productForm.reset();
});

// Editar producto
function editProduct(id) {
  editing = true;
  currentProductId = id;
  const product = allProducts.find(p => p.id === id);
  if (!product) return;

  // Llenar formulario con los datos del producto
  document.getElementById('id').value = product.id || '';
  document.getElementById('name').value = product.name || '';
  document.getElementById('brand').value = product.brand || '';
  document.getElementById('type').value = product.type || '';
  document.getElementById('flavor').value = product.flavor || '';
  document.getElementById('price').value = product.price || '';
  document.getElementById('offerprice').value = product.offerprice || '';
  document.getElementById('image').value = product.image || '';
  document.getElementById('puffs').value = product.puffs || '';
  document.getElementById('capacity').value = product.capacity || '';
  document.getElementById('nicotine').value = product.nicotine || '';
  document.getElementById('tag').value = product.tag || '';
  document.getElementById('description').value = product.description || '';

  modalTitle.textContent = "Editar producto";
  productModal.classList.add("active");
}

// Guardar producto (crear o actualizar)
productForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Recolectar datos del formulario
  const productData = {
    id: document.getElementById('id').value.trim(),
    name: document.getElementById('name').value.trim(),
    brand: document.getElementById('brand').value.trim(),
    type: document.getElementById('type').value.trim(),
    flavor: document.getElementById('flavor').value.trim(),
    price: parseFloat(document.getElementById('price').value) || 0,
    offerprice: parseFloat(document.getElementById('offerprice').value) || 0,
    image: document.getElementById('image').value.trim(),
    puffs: document.getElementById('puffs').value.trim(),
    capacity: document.getElementById('capacity').value.trim(),
    nicotine: document.getElementById('nicotine').value.trim(),
    tag: document.getElementById('tag').value.trim(),
    description: document.getElementById('description').value.trim(),
    available: true // Por defecto disponible
  };

  // Validaciones
  if (!productData.id) {
    alert("El ID del producto es obligatorio");
    return;
  }

  if (!productData.name) {
    alert("El nombre del producto es obligatorio");
    return;
  }

  try {
    if (editing) {
      // Mantener el estado de disponibilidad al editar
      const existingDoc = await dbRef.doc(currentProductId).get();
      if (existingDoc.exists) {
        productData.available = existingDoc.data().available;
      }
      await dbRef.doc(currentProductId).set(productData, { merge: true });
    } else {
      // Verificar si el ID ya existe
      const exists = await dbRef.doc(productData.id).get();
      if (exists.exists) {
        alert("Ya existe un producto con este ID");
        return;
      }
      await dbRef.doc(productData.id).set(productData);
    }

    // Cerrar modal y actualizar lista
    productModal.classList.remove("active");
    productForm.reset();
    loadProducts();
  } catch (error) {
    console.error("Error al guardar el producto:", error);
    alert("Error al guardar el producto");
  }
});

// Cambiar disponibilidad del producto
window.toggleAvailable = async function(id) {
  const product = allProducts.find(p => p.id === id);
  if (!product) return;

  try {
    await dbRef.doc(id).update({ 
      available: !product.available 
    });
    loadProducts();
  } catch (error) {
    console.error("Error al cambiar disponibilidad:", error);
    alert("Error al cambiar disponibilidad");
  }
};

// Eliminar producto
async function deleteProduct(id) {
  if (!confirm("¿Estás seguro de eliminar este producto?")) return;

  try {
    await dbRef.doc(id).delete();
    loadProducts();
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    alert("Error al eliminar el producto");
  }
}

// Botón de cerrar sesión
const logoutBtn = document.createElement("button");
logoutBtn.textContent = "Cerrar sesión";
logoutBtn.className = "bg-secondary ml-2";
logoutBtn.onclick = () => {
  firebase.auth().signOut().then(() => {
    localStorage.clear();
    window.location.href = "login.html";
  });
};
document.querySelector(".header-actions")?.appendChild(logoutBtn);

// Hacer funciones disponibles globalmente
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.toggleAvailable = toggleAvailable;

// Cargar productos al iniciar
loadProducts();