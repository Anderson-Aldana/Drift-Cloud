
// Admin Script
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el usuario está logueado
    if (!sessionStorage.getItem('adminLoggedIn')) {
        window.location.href = 'admin-login.html';
        return;
    }
    
    // Mostrar nombre de admin
    const adminName = document.querySelector('.admin-name');
    if (adminName) {
        const username = sessionStorage.getItem('adminUsername');
        adminName.textContent = `(${username})`;
    }
    
    // Cargar productos
    loadAdminProducts();
    
    // Configurar búsqueda
    const searchInput = document.getElementById('admin-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterProducts(this.value.trim().toLowerCase());
        });
    }
    
    // Configurar logout
    const logoutBtn = document.getElementById('admin-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sessionStorage.removeItem('adminLoggedIn');
            sessionStorage.removeItem('adminUsername');
            window.location.href = 'admin-login.html';
        });
    }
    
    // Configurar modal y eventos para admin completo
    if (document.getElementById('add-product')) {
        setupAdminFull();
    } else {
        setupAdminLimited();
    }
});

function loadAdminProducts() {
    const products = JSON.parse(sessionStorage.getItem('productsDatabase')) || window.productsDatabase;
    const container = document.getElementById('admin-products-grid');
    
    if (!container) return;
    
    // Verificar si es admin completo o limitado
    const isFullAdmin = document.getElementById('add-product') !== null;
    
    container.innerHTML = products.map(product => `
        <div class="admin-product-card">
            <div class="admin-product-header">
                <div>
                    <h3>${product.name}</h3>
                    <span class="admin-product-brand">${product.brand}</span>
                </div>
                <img src="img/${product.brand}/${product.image}" alt="${product.name}" class="admin-product-image">
            </div>
            
            <div class="admin-product-details">
                <p><strong>Tipo:</strong> ${product.type === 'kit' ? 'Kit completo' : 'Recarga'}</p>
                <p><strong>Sabor:</strong> ${product.flavor}</p>
                <p><strong>Precio:</strong> S/${product.price.toFixed(2)}</p>
                ${product.tag ? `<p><strong>Etiqueta:</strong> ${product.tag}</p>` : ''}
            </div>
            
            <div class="admin-product-actions">
                <label class="switch">
                    <input type="checkbox" ${product.available ? 'checked' : ''} 
                           data-id="${product.id}" class="availability-toggle">
                    <span class="slider"></span>
                </label>
                <span>${product.available ? 'Disponible' : 'Agotado'}</span>
                
                ${isFullAdmin ? `
                <button class="edit-btn" data-id="${product.id}">
                    <i class="fas fa-edit"></i> Editar
                </button>
                ` : ''}
            </div>
        </div>
    `).join('') || '<p class="no-products">No hay productos registrados</p>';
}

function filterProducts(query) {
    const products = JSON.parse(sessionStorage.getItem('productsDatabase')) || window.productsDatabase;
    const container = document.getElementById('admin-products-grid');
    
    if (!container || !query) {
        loadAdminProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.brand.toLowerCase().includes(query) ||
        product.flavor.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    
    container.innerHTML = filteredProducts.map(product => `
        <div class="admin-product-card">
            <div class="admin-product-header">
                <div>
                    <h3>${product.name}</h3>
                    <span class="admin-product-brand">${product.brand}</span>
                </div>
                <img src="img/${product.brand}/${product.image}" alt="${product.name}" class="admin-product-image">
            </div>
            
            <div class="admin-product-details">
                <p><strong>Tipo:</strong> ${product.type === 'kit' ? 'Kit completo' : 'Recarga'}</p>
                <p><strong>Sabor:</strong> ${product.flavor}</p>
                <p><strong>Precio:</strong> S/${product.price.toFixed(2)}</p>
                ${product.tag ? `<p><strong>Etiqueta:</strong> ${product.tag}</p>` : ''}
            </div>
            
            <div class="admin-product-actions">
                <label class="switch">
                    <input type="checkbox" ${product.available ? 'checked' : ''} 
                           data-id="${product.id}" class="availability-toggle">
                    <span class="slider"></span>
                </label>
                <span>${product.available ? 'Disponible' : 'Agotado'}</span>
                
                ${document.getElementById('add-product') ? `
                <button class="edit-btn" data-id="${product.id}">
                    <i class="fas fa-edit"></i> Editar
                </button>
                ` : ''}
            </div>
        </div>
    `).join('') || '<p class="no-products">No se encontraron productos</p>';
}

function setupAdminFull() {
    // Configurar modal
    const modal = document.getElementById('product-modal');
    const addBtn = document.getElementById('add-product');
    const closeBtn = document.querySelector('.close-modal');
    const cancelBtn = document.getElementById('cancel-edit');
    const form = document.getElementById('product-form');
    
    // Abrir modal para añadir producto
    addBtn.addEventListener('click', function() {
        document.getElementById('modal-title').textContent = 'Añadir Nuevo Producto';
        form.reset();
        document.getElementById('product-id').value = '';
        modal.style.display = 'block';
    });
    
    // Cerrar modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    cancelBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Cerrar al hacer clic fuera del modal
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Editar producto
    document.addEventListener('click', function(e) {
        if (e.target.closest('.edit-btn')) {
            const productId = e.target.closest('.edit-btn').dataset.id;
            editProduct(productId);
        }
    });
    
    // Guardar producto
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        saveProduct();
    });
    
    // Toggle disponibilidad
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('availability-toggle')) {
            toggleAvailability(e.target.dataset.id, e.target.checked);
        }
    });
}

function setupAdminLimited() {
    // Solo toggle disponibilidad
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('availability-toggle')) {
            toggleAvailability(e.target.dataset.id, e.target.checked);
        }
    });
}

function editProduct(productId) {
    const products = JSON.parse(sessionStorage.getItem('productsDatabase')) || window.productsDatabase;
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    document.getElementById('modal-title').textContent = 'Editar Producto';
    
    // Llenar el formulario con los datos del producto
    document.getElementById('product-id').value = product.id;
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-brand').value = product.brand;
    document.getElementById('product-type').value = product.type;
    document.getElementById('product-flavor').value = product.flavor;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-offerprice').value = product.offerprice || '';
    document.getElementById('product-puffs').value = product.puffs;
    document.getElementById('product-capacity').value = product.capacity;
    document.getElementById('product-nicotine').value = product.nicotine;
    document.getElementById('product-description').value = product.description;
    document.getElementById('product-tag').value = product.tag || '';
    document.getElementById('product-available').checked = product.available;
    document.getElementById('product-image').value = product.image;
    
    modal.style.display = 'block';
}

function saveProduct() {
    const products = JSON.parse(sessionStorage.getItem('productsDatabase')) || window.productsDatabase;
    const form = document.getElementById('product-form');
    const productId = document.getElementById('product-id').value;
    
    const productData = {
        id: productId || generateId(),
        name: document.getElementById('product-name').value,
        brand: document.getElementById('product-brand').value,
        type: document.getElementById('product-type').value,
        flavor: document.getElementById('product-flavor').value,
        price: parseFloat(document.getElementById('product-price').value),
        offerprice: parseFloat(document.getElementById('product-offerprice').value) || null,
        puffs: document.getElementById('product-puffs').value,
        capacity: document.getElementById('product-capacity').value,
        nicotine: document.getElementById('product-nicotine').value,
        description: document.getElementById('product-description').value,
        tag: document.getElementById('product-tag').value || null,
        available: document.getElementById('product-available').checked,
        image: document.getElementById('product-image').value
    };
    
    // Actualizar o añadir producto
    if (productId) {
        // Editar producto existente
        const index = products.findIndex(p => p.id === productId);
        if (index !== -1) {
            products[index] = productData;
        }
    } else {
        // Añadir nuevo producto
        products.push(productData);
    }
    
    // Guardar en sessionStorage
    sessionStorage.setItem('productsDatabase', JSON.stringify(products));
    
    // Recargar productos
    loadAdminProducts();
    
    // Cerrar modal
    document.getElementById('product-modal').style.display = 'none';
    
    // Mostrar mensaje de éxito
    alert('Producto guardado correctamente');
}

function toggleAvailability(productId, isAvailable) {
    const products = JSON.parse(sessionStorage.getItem('productsDatabase')) || window.productsDatabase;
    const product = products.find(p => p.id === productId);
    
    if (product) {
        product.available = isAvailable;
        sessionStorage.setItem('productsDatabase', JSON.stringify(products));
        
        // Actualizar el texto
        const toggle = document.querySelector(`.availability-toggle[data-id="${productId}"]`);
        if (toggle) {
            const textElement = toggle.closest('.admin-product-actions').querySelector('span');
            if (textElement) {
                textElement.textContent = isAvailable ? 'Disponible' : 'Agotado';
            }
        }
        
        // Disparar evento para actualizar otras pestañas
        const event = new CustomEvent('productAvailabilityChanged', {
            detail: {
                productId: productId,
                isAvailable: isAvailable
            }
        });
        document.dispatchEvent(event);
    }
}

function generateId() {
    // Generar un ID único basado en timestamp y random
    return 'prod-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
}