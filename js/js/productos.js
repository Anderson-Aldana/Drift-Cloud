// 🔁 Cargar productos desde Firebase
async function fetchProductsFromFirebase() {
  const db = firebase.firestore();

  try {
    const snapshot = await db.collection("products").get();
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    console.log("Productos cargados desde Firebase:", products);

    window.productsDatabase = products;
    document.dispatchEvent(new Event("FirebaseProductsReady"));
  } catch (error) {
    console.error("Error al cargar productos desde Firebase:", error);
    window.productsDatabase = [];
    document.dispatchEvent(new Event("FirebaseProductsReady"));
  }
}

// Inicia la carga
fetchProductsFromFirebase();

// Nueva función para verificar días de oferta
function isOfferDay() {
  const today = new Date().getDay();
  return today === 0 || (includeSaturdayOffers && today === 6); // 0=Domingo, 6=Sábado
}

// ✅ Mostrar productos en el grid
function displayStoreProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const offerDay = isOfferDay();

  container.innerHTML = products.map(product => `
    <div class="product-card">
      <a href="producto.html?id=${product.id}" class="product-card-link">
        <div class="product-image">
          <img src="img/${product.brand}/${product.image}" alt="${product.name}" loading="lazy">
          ${offerDay && product.offerprice ? '<span class="product-tag sunday-offer">Solo por Hoy🔥!!</span>' : ''}
          ${!offerDay && product.tag ? `<span class="product-tag ${product.tag.toLowerCase().replace(/ /g, '-')}">${product.tag}</span>` : ''}
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <span class="product-brand">${product.brand}</span>
          <p class="product-description-short">${product.description.substring(0, 60)}...</p>
          <div class="product-price">
            ${offerDay && product.offerprice ? `
              <span class="old-price">S/${product.price.toFixed(2)}</span>
              <span class="current-price">S/${product.offerprice.toFixed(2)}</span>
            ` : `
              ${product.oldPrice ? `<span class="old-price">S/${product.oldPrice.toFixed(2)}</span>` : ''}
              <span class="current-price">S/${product.price.toFixed(2)}</span>
            `}
          </div>
          <div class="btn ${!product.available ? 'disabled' : ''}">
            ${product.available ? 'Ver Producto' : 'Agotado'}
          </div>
        </div>
      </a>
    </div>
  `).join('') || '<p class="no-products">No se encontraron productos</p>';
}

// ✅ Paginación
let currentPage = 1;
const productsPerPage = 20;

function displayPaginatedProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginated = products.slice(start, end);

  displayStoreProducts(paginated, containerId);
  setupPagination(products.length);
}

function setupPagination(total) {
  const totalPages = Math.ceil(total / productsPerPage);
  const numbers = document.getElementById('page-numbers');
  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');

  if (!numbers || !prevBtn || !nextBtn) return;

  numbers.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = currentPage === i ? 'active' : '';
    btn.addEventListener('click', () => {
      currentPage = i;
      applyFilters();
      document.querySelector('.products-main').scrollIntoView({ behavior: 'smooth' });
    });
    numbers.appendChild(btn);
  }

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;

  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      applyFilters();
      document.querySelector('.products-main').scrollIntoView({ behavior: 'smooth' });
    }
  };

  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      applyFilters();
      document.querySelector('.products-main').scrollIntoView({ behavior: 'smooth' });
    }
  };
}

function getURLFilters() {
  const params = new URLSearchParams(window.location.search);
  return {
    marca: params.get('marca'),
    tipo: params.get('tipo'),
    sabor: params.get('sabor'),
    search: params.get('search')
  };
}


// ✅ Aplicar filtros dinámicos
function applyFilters() {
  if (!Array.isArray(window.productsDatabase)) {
    console.warn("Productos aún no cargados.");
    return;
  }

  let filtered = [...window.productsDatabase];
  const urlFilters = getURLFilters();

    // Filtro de búsqueda (si existe en la URL)
  if (urlFilters.search) {
    const searchQuery = urlFilters.search.toLowerCase();
    filtered = filtered.filter(product => 
      product.name.toLowerCase().includes(searchQuery) || 
      product.brand.toLowerCase().includes(searchQuery) || 
      product.flavor.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery)
    );
  }

  // Marca
  const brandFilters = Array.from(document.querySelectorAll('input[name="marca"]:checked'))
    .map(cb => cb.value).filter(val => val !== "all");

  if (brandFilters.length) {
    filtered = filtered.filter(p => brandFilters.includes(p.brand));
  }

  // Tipo
  const typeFilters = Array.from(document.querySelectorAll('input[name="tipo"]:checked'))
    .map(cb => cb.value).filter(val => val !== "all");

  if (typeFilters.length) {
    filtered = filtered.filter(p => typeFilters.includes(p.type));
  }

  // Sabor
  const flavorFilters = Array.from(document.querySelectorAll('input[name="sabor"]:checked'))
    .map(cb => cb.value).filter(val => val !== "all");

  if (flavorFilters.length) {
    filtered = filtered.filter(p => flavorFilters.includes(p.flavor.toLowerCase()));
  }

  // Ordenar: disponibles primero
  filtered.sort((a, b) => (b.available ? 1 : 0) - (a.available ? 1 : 0));

  displayPaginatedProducts(filtered, 'products-grid');
}

document.addEventListener("FirebaseProductsReady", () => {
  if (document.getElementById('products-grid')) {
    const urlFilters = getURLFilters();

    // Marcar los checkboxes de acuerdo a los filtros de la URL
    if (urlFilters.marca) {
      const checkbox = document.querySelector(`input[name="marca"][value="${urlFilters.marca}"]`);
      if (checkbox) checkbox.checked = true;
    }

    if (urlFilters.tipo) {
      const checkbox = document.querySelector(`input[name="tipo"][value="${urlFilters.tipo}"]`);
      if (checkbox) checkbox.checked = true;
    }

    if (urlFilters.sabor) {
      const checkbox = document.querySelector(`input[name="sabor"][value="${urlFilters.sabor}"]`);
      if (checkbox) checkbox.checked = true;
    }
        // Si hay un parámetro de búsqueda en la URL, mostrarlo en el input
    if (urlFilters.search) {
      const searchInput = document.querySelector('.search-input');
      if (searchInput) {
        searchInput.value = urlFilters.search;
      }
    }

    applyFilters(); // <-- aplicar después de marcar checkboxes
  }

  // Escuchar cambios en filtros
  document.querySelectorAll('.filter-options input').forEach(input => {
    input.addEventListener('change', applyFilters);
  });
});

