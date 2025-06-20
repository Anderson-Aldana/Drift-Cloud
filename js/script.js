// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
    
    // Hero Slider
    const slider = document.querySelector('.slider-container');
    if (slider) {
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const dotsContainer = document.querySelector('.slider-dots');
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
        
        const dots = document.querySelectorAll('.dot');
        
        // Show initial slide
        showSlide(currentSlide);
        
        // Next slide
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
            });
        }
        
        // Previous slide
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                showSlide(currentSlide);
            });
        }
        
        // Auto slide change
        let slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }, 5000);
        
        // Pause on hover
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
            }, 5000);
        });
        
        function showSlide(index) {
            slides.forEach(slide => {
                slide.classList.remove('active');
                // Asegúrate de que solo el slide activo sea interactivo
                slide.style.pointerEvents = 'none';
            });
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[index].classList.add('active');
            slides[index].style.pointerEvents = 'auto'; // Solo el slide activo puede recibir clics
            dots[index].classList.add('active');
        }
        
        function goToSlide(index) {
            currentSlide = index;
            showSlide(currentSlide);
        }
    }
    
    // WhatsApp float button animation
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        setTimeout(() => {
            whatsappFloat.style.transform = 'scale(1.1)';
            setTimeout(() => {
                whatsappFloat.style.transform = 'scale(1)';
            }, 300);
        }, 1000);
    }
});

// Mobile submenu toggle
const submenuToggles = document.querySelectorAll('.has-submenu > a');
submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const parent = this.parentElement;
            const submenu = parent.querySelector('.submenu');
            
            parent.classList.toggle('active');
            submenu.classList.toggle('active');
        }
    });
});

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    const mobileSearchToggle = document.querySelector('.mobile-search-toggle');
    const searchContainer = document.querySelector('.search-container');

    // Toggle mobile search
    if (mobileSearchToggle && searchContainer) {
        mobileSearchToggle.addEventListener('click', function() {
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active')) {
                searchInput.focus();
            }
        });
    }

    // Search functionality
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }
            
            const results = window.productsDatabase.filter(product => {
                return product.name.toLowerCase().includes(query) || 
                    product.brand.toLowerCase().includes(query) || 
                    product.flavor.toLowerCase().includes(query) ||
                    product.description.toLowerCase().includes(query);
            });
            
            displaySearchResults(results);
        });
        
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim().toLowerCase();
            
            if (query.length < 1) return;
            
            const results = window.productsDatabase.filter(product => {
                return product.name.toLowerCase().includes(query) || 
                    product.brand.toLowerCase().includes(query) || 
                    product.flavor.toLowerCase().includes(query) ||
                    product.description.toLowerCase().includes(query);
            });
            
            if (results.length > 0) {
                window.location.href = `productos.html?search=${encodeURIComponent(query)}`;
            }
        });
    }
    
    // Mejorar la función de búsqueda en tiempo real
    function displaySearchResults(results) {
        const container = document.querySelector('.search-results');
        
        if (results.length === 0) {
            container.innerHTML = '<div class="no-results">No se encontraron productos</div>';
            container.style.display = 'block';
            return;
        }
        
        // Mostrar hasta 10 resultados con scroll
        container.innerHTML = results.slice(0, 10).map(product => `
            <a href="producto.html?id=${product.id}" class="search-result-item">
                <img src="img/${product.brand}/${product.image}" alt="${product.name}" class="search-result-img">
                <div class="search-result-text">
                    <h4>${product.name}</h4>
                    <p>${product.brand} - ${product.flavor}</p>
                    <small>S/${product.price.toFixed(2)}</small>
                </div>
            </a>
        `).join('');
        
        // Agregar enlace para ver todos los resultados si hay más de 10
        if (results.length > 10) {
            const query = searchInput.value.trim();
            container.innerHTML += `
                <a href="productos.html?search=${encodeURIComponent(query)}" class="view-all-results">
                    Ver todos los resultados (${results.length})
                </a>
            `;
        }
        
        container.style.display = 'block';
        container.style.maxHeight = '400px';
        container.style.overflowY = 'auto';
    }
    
    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchForm.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
});