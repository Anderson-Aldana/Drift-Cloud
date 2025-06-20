// Credenciales de administrador
const adminCredentials = {
    admin1: {
        username: 'Anderson',
        password: '1901',
        role: 'full'
    },
    admin2: {
        username: 'Adrian',
        password: '7532',
        role: 'limited'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const adminPanel = document.getElementById('admin-panel');
    const adminLogin = document.getElementById('admin-login');
    const logoutBtn = document.getElementById('logout-btn');
    const adminNameSpan = document.getElementById('admin-name');
    
    let currentAdmin = null;
    
    // Verificar si ya hay una sesión activa
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
        const savedAdmin = JSON.parse(sessionStorage.getItem('currentAdmin'));
        if (savedAdmin) {
            currentAdmin = savedAdmin;
            showAdminPanel();
        }
    }
    
    // Manejar el inicio de sesión
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('login-error');
            
            // Verificar credenciales
            let validAdmin = null;
            
            for (const [key, admin] of Object.entries(adminCredentials)) {
                if (admin.username === username && admin.password === password) {
                    validAdmin = {
                        username: admin.username,
                        role: admin.role
                    };
                    break;
                }
            }
            
            if (validAdmin) {
                currentAdmin = validAdmin;
                sessionStorage.setItem('adminLoggedIn', 'true');
                sessionStorage.setItem('currentAdmin', JSON.stringify(currentAdmin));
                showAdminPanel();
            } else {
                errorMessage.textContent = 'Usuario o contraseña incorrectos';
            }
        });
    }
    
    // Manejar el cierre de sesión
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            sessionStorage.removeItem('adminLoggedIn');
            sessionStorage.removeItem('currentAdmin');
            currentAdmin = null;
            hideAdminPanel();
        });
    }
    
    function showAdminPanel() {
        if (adminPanel && adminLogin) {
            adminLogin.style.display = 'none';
            adminPanel.style.display = 'block';
            
            if (adminNameSpan && currentAdmin) {
                adminNameSpan.textContent = currentAdmin.username;
            }
            
            // Cargar los productos más recientes de sessionStorage
            const savedProducts = sessionStorage.getItem('productsDatabase');
            if (savedProducts) {
                window.productsDatabase = JSON.parse(savedProducts);
            }
            
            // Mostrar productos en el panel de administración
            displayAdminProducts();
            
            // Configurar pestañas si es admin1
            if (currentAdmin.role === 'full') {
                setupAdminTabs();
            }
        }
    }
    function hideAdminPanel() {
        if (adminPanel && adminLogin) {
            adminPanel.style.display = 'none';
            adminLogin.style.display = 'flex';
            
            // Limpiar formulario
            if (loginForm) {
                loginForm.reset();
                document.getElementById('login-error').textContent = '';
            }
        }
    }
    
    function setupAdminTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remover clase active de todos los botones y contenidos
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Agregar clase active al botón y contenido seleccionado
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    function displayAdminProducts() {
        const adminProductsGrid = document.getElementById('admin-products-grid');
        
        if (adminProductsGrid) {
            adminProductsGrid.innerHTML = window.productsDatabase.map(product => createAdminProductCard(product)).join('');
            
            // Configurar eventos para los switches de disponibilidad
            document.querySelectorAll('.availability-switch').forEach(switchEl => {
                switchEl.addEventListener('change', function() {
                    const productId = this.getAttribute('data-product-id');
                    const product = window.productsDatabase.find(p => p.id === productId);
                    
                    if (product) {
                        // Actualizar estado en la base de datos
                        product.available = this.checked;
                        
                        // Guardar en sessionStorage
                        sessionStorage.setItem('productsDatabase', JSON.stringify(window.productsDatabase));
                        
                        // Actualizar UI en el panel de administración
                        updateAdminProductUI(productId, this.checked);
                        
                        // Disparar evento para actualizar otras páginas
                        document.dispatchEvent(new CustomEvent('productAvailabilityChanged', {
                            detail: {
                                productId: productId,
                                isAvailable: this.checked
                            }
                        }));
                        
                        console.log(`Disponibilidad de ${product.name} actualizada a: ${product.available}`);
                    }
                });
            });
            
            // Configurar eventos para los botones de edición (solo admin1)
            if (currentAdmin.role === 'full') {
                document.querySelectorAll('.edit-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const productId = this.getAttribute('data-product-id');
                        const product = window.productsDatabase.find(p => p.id === productId);
                        
                        if (product) {
                            alert(`Editar producto: ${product.name}\nEsta funcionalidad se implementaría completamente en una versión futura.`);
                        }
                    });
                });
            }
        }
    }
    
    function updateAdminProductUI(productId, isAvailable) {
        // Actualizar botones en el panel de administración
        const whatsappButtons = document.querySelectorAll(`[data-product-id="${productId}"] .whatsapp-btn`);
        whatsappButtons.forEach(btn => {
            btn.disabled = !isAvailable;
        });
        
        const statusIndicators = document.querySelectorAll(`[data-product-id="${productId}"] .product-status`);
        statusIndicators.forEach(indicator => {
            indicator.textContent = isAvailable ? 'Disponible' : 'Agotado';
            indicator.className = `product-status ${isAvailable ? 'available' : 'unavailable'}`;
        });
    }
    
    function createAdminProductCard(product) {
    const isFullAdmin = currentAdmin && currentAdmin.role === 'full';
    
        return `
            <div class="admin-product-card" data-product-id="${product.id}">
                <div class="admin-product-header">
                    <div>
                        <div class="admin-product-name">${product.name}</div>
                        <div class="admin-product-brand">${product.brand}</div>
                    </div>
                    <img src="img/${product.brand}/${product.image}" alt="${product.name}" class="admin-product-image">
                </div>
                
                <div class="admin-product-details">
                    <div class="admin-detail-row">
                        <span class="admin-detail-label">Tipo:</span>
                        <span class="admin-detail-value">${product.type === 'kit' ? 'Kit completo' : 'Recarga'}</span>
                    </div>
                    <div class="admin-detail-row">
                        <span class="admin-detail-label">Sabor:</span>
                        <span class="admin-detail-value">${product.flavor}</span>
                    </div>
                    <div class="admin-detail-row">
                        <span class="admin-detail-label">Precio:</span>
                        <span class="admin-detail-value">S/${product.price.toFixed(2)}</span>
                    </div>
                    ${product.tag ? `
                    <div class="admin-detail-row">
                        <span class="admin-detail-label">Etiqueta:</span>
                        <span class="admin-detail-value">${product.tag}</span>
                    </div>
                    ` : ''}
                </div>
                
                <div class="admin-product-actions">
                    <div class="switch-container">
                        <span>Disponible:</span>
                        <label class="switch">
                            <input type="checkbox" class="availability-switch" 
                                data-product-id="${product.id}" 
                                ${product.available ? 'checked' : ''}>
                            <span class="slider"></span>
                        </label>
                    </div>

                    ${isFullAdmin ? `
                    <button class="edit-btn" data-product-id="${product.id}">
                        Editar Producto
                    </button>
                    ` : ''}
                </div>
            </div>
        `;
    }
    
    // Búsqueda de productos (solo para admin1)
    const productSearch = document.getElementById('product-search');
    const searchBtn = document.getElementById('search-btn');
    
    if (productSearch && searchBtn) {
        searchBtn.addEventListener('click', searchProducts);
        productSearch.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
    
    function searchProducts() {
        const searchTerm = productSearch.value.toLowerCase();
        
        if (searchTerm.trim() === '') {
            filteredProducts = [...window.productsDatabase];
        } else {
            filteredProducts = window.productsDatabase.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.brand.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
        }
        
        displayAdminProducts();
    }
});