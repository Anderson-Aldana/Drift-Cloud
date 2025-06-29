// admin2-handler.js

// Variables globales
let db;
let allProducts = [];

// Verificar autenticación y rol
firebase.auth().onAuthStateChanged(async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  // Verificar rol del usuario
  const role = localStorage.getItem("userRole");
  if (role !== "limited") {
    alert("No tienes permisos para acceder a esta página");
    window.location.href = "index.html";
    return;
  }

  // Mostrar información del usuario
  /*const email = localStorage.getItem("userEmail");
  if (email && role) {
    document.getElementById("user-info").innerHTML = `<strong>${email}</strong><br>Rol: ${role}`;
  }*/

  // Inicializar Firestore después de la autenticación
  db = firebase.firestore();
  
  // Inicializar la aplicación
  initializeApp();
});

// Función para inicializar la aplicación
function initializeApp() {
  const productList = document.getElementById('product-list');
  const searchInput = document.getElementById('search');
  const filterSelect = document.getElementById('filter');

  // Botón de cerrar sesión
  document.getElementById('logout-btn').addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
      localStorage.clear();
      window.location.href = "login.html";
    });
  });

  // Cargar productos desde Firestore
  async function loadProducts() {
    try {
      const snapshot = await db.collection("products").get();
      allProducts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      renderProducts();
    } catch (error) {
      console.error("Error cargando productos:", error);
      productList.innerHTML = `<p class="text-red-500">Error al cargar productos: ${error.message}</p>`;
    }
  }

  // Renderizar productos en la lista
  function renderProducts() {
    const term = searchInput.value.toLowerCase();
    const filter = filterSelect.value;

    const filtered = allProducts.filter(p => {
      const matchSearch = p.name?.toLowerCase().includes(term) || 
                         p.brand?.toLowerCase().includes(term) ||
                         p.type?.toLowerCase().includes(term);
      const matchFilter = filter === "all" || 
                         (filter === "available" && p.available) || 
                         (filter === "unavailable" && !p.available);
      return matchSearch && matchFilter;
    });

    productList.innerHTML = '';

    if (filtered.length === 0) {
      productList.innerHTML = '<p class="text-center py-4">No se encontraron productos.</p>';
      return;
    }

    filtered.forEach(prod => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${prod.image ? 'img/' + prod.brand + '/' + prod.image : 'img/no-image.png'}" alt="${prod.name}" onerror="this.src='img/no-image.png'" />
        <h3 class="font-bold">${prod.name}</h3>
        <p><strong>Marca:</strong> ${prod.brand || 'N/A'} - ${prod.type || 'N/A'}</p>
        <p class="text-sm text-gray-600 my-2">${prod.description?.substring(0, 100) || ''}${prod.description?.length > 100 ? '...' : ''}</p>
        <p><strong>Precio:</strong> S/ ${prod.price?.toFixed(2) || '0.00'} | <strong>Oferta:</strong> S/ ${prod.offerprice?.toFixed(2) || '0.00'}</p>
        <div class="status-label ${prod.available ? 'available' : 'unavailable'}">
          ${prod.available ? 'Disponible' : 'Agotado'}
        </div>
        ${prod.tag ? `<div class="tag">${prod.tag}</div>` : ''}
        <div class="availability-toggle">
          <label>Cambiar disponibilidad:</label>
          <label class="switch">
            <input type="checkbox" ${prod.available ? 'checked' : ''} data-id="${prod.id}">
            <span class="slider"></span>
          </label>
        </div>
      `;

      // Agregar evento al toggle de disponibilidad
      const toggle = card.querySelector('input[type="checkbox"]');
      toggle.addEventListener('change', async (e) => {
        e.preventDefault();
        await toggleAvailability(prod.id, toggle.checked);
      });

      productList.appendChild(card);
    });
  }

  // Cambiar disponibilidad del producto
  async function toggleAvailability(productId, isAvailable) {
    try {
      // Verificar que la base de datos esté disponible
      if (!db) {
        throw new Error("Base de datos no inicializada");
      }

      // Verificar que el usuario esté autenticado
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        throw new Error("Usuario no autenticado");
      }

      const userEmail = currentUser.email;
      console.log(`Usuario autenticado: ${userEmail}`);
      console.log(`UID: ${currentUser.uid}`);
      console.log(`Rol desde localStorage: ${localStorage.getItem("userRole")}`);
      console.log(`Actualizando producto ${productId} a disponibilidad: ${isAvailable}`);
      
      // Verificar que el usuario tenga el documento en la colección users
      const userDoc = await db.collection("users").doc(userEmail).get();
      if (!userDoc.exists) {
        throw new Error("Documento de usuario no encontrado en Firestore");
      }
      
      const userData = userDoc.data();
      console.log(`Datos del usuario desde Firestore:`, userData);
      
      if (userData.role !== 'limited') {
        throw new Error(`Rol incorrecto: ${userData.role}. Se requiere rol 'limited'`);
      }
      
      // Actualizar en Firestore - SOLO el campo available según las reglas
      await db.collection("products").doc(productId).update({
        available: isAvailable
      });
      
      // Actualizar la lista local para reflejar el cambio
      const productIndex = allProducts.findIndex(p => p.id === productId);
      if (productIndex !== -1) {
        allProducts[productIndex].available = isAvailable;
      }
      
      // Actualizar solo el producto cambiado en la UI
      const toggle = document.querySelector(`input[data-id="${productId}"]`);
      const statusLabel = toggle?.closest('.product-card')?.querySelector('.status-label');
      if (statusLabel) {
        statusLabel.textContent = isAvailable ? 'Disponible' : 'Agotado';
        statusLabel.className = `status-label ${isAvailable ? 'available' : 'unavailable'}`;
      }
      
    } catch (error) {
      console.error("Error al actualizar disponibilidad:", error);
      showMessage(`Error al cambiar la disponibilidad: ${error.message}`, 'error');
      
      // Revertir el cambio en el toggle si falla
      const toggle = document.querySelector(`input[data-id="${productId}"]`);
      if (toggle) {
        toggle.checked = !isAvailable;
      }
    }
  }

  // Función para mostrar mensajes
  function showMessage(message, type) {
    // Remover mensajes anteriores
    const existingMessages = document.querySelectorAll('.notification-message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `notification-message fixed top-4 right-4 p-4 rounded shadow-lg z-50 ${
      type === 'success' ? 'bg-green-500 text-white' : 
      type === 'error' ? 'bg-red-500 text-white' : 
      'bg-blue-500 text-white'
    }`;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    if (type !== 'info') {
      setTimeout(() => {
        messageDiv.remove();
      }, 3000);
    }
  }

  // Event listeners para búsqueda y filtrado
  searchInput.addEventListener("input", renderProducts);
  filterSelect.addEventListener("change", renderProducts);

  // Cargar productos inicialmente
  loadProducts();
}