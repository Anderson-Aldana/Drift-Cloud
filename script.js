// Función para pedir producto por WhatsApp
function pedirProducto(nombre) {
  const telefono = '51976404496'; // Reemplaza con tu número
  const mensaje = `¡Hola Drift & Cloud! Estoy interesado en el producto: ${nombre}. ¿Podrían darme más información?`;
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  // Verificar edad
  checkAge();
  
  // Smooth scrolling para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Efecto de carga inicial
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 300);
});

// Mostrar/ocultar botón de WhatsApp flotante al hacer scroll
let lastScroll = 0;
window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset;
  const whatsappBtn = document.querySelector('.whatsapp-float');
  
  if (currentScroll <= 0) {
    whatsappBtn.style.transform = 'translateY(0)';
    return;
  }
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scroll hacia abajo
    whatsappBtn.style.transform = 'translateY(100px)';
  } else {
    // Scroll hacia arriba
    whatsappBtn.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});

// Función para filtrar productos por categoría
function filtrarProductos() {
  const categoriaSeleccionada = document.getElementById('category').value;
  const productos = document.querySelectorAll('.product-card');

  productos.forEach(producto => {
    const categoriaProducto = producto.getAttribute('data-category');
    const esTodasCategorias = categoriaSeleccionada === 'Todos';
    const coincideCategoria = categoriaProducto === categoriaSeleccionada.toLowerCase();

    producto.style.display = (esTodasCategorias || coincideCategoria) ? 'block' : 'none';
  });
}

// Evento para el selector de categoría
document.getElementById('category').addEventListener('change', filtrarProductos);

// Función para ordenar productos
function ordenarProductos() {
  const criterio = document.getElementById('sort').value;
  const contenedor = document.querySelector('.products-grid');
  const productos = Array.from(document.querySelectorAll('.product-card'));

  productos.sort((a, b) => {
    switch (criterio) {
      case 'precio-asc':
        return extraerPrecio(a) - extraerPrecio(b);
      case 'precio-desc':
        return extraerPrecio(b) - extraerPrecio(a);
      case 'novedades':
        // Ordenar por productos con badge "Nuevo" primero
        return tieneBadge(b, 'Nuevo') - tieneBadge(a, 'Nuevo');
      case 'mas-vendidos':
      default:
        // Ordenar por productos con badge "Más vendido" primero
        return tieneBadge(b, 'Más vendido') - tieneBadge(a, 'Más vendido');
    }
  });

  // Reinsertar productos en el orden nuevo
  productos.forEach(producto => contenedor.appendChild(producto));
}

// Helper: Extrae el precio numérico (ej: "$24.900" → 24900)
function extraerPrecio(producto) {
  const textoPrecio = producto.querySelector('.price').textContent;
  return Number(textoPrecio.replace(/[^\d]/g, ''));
}

// Helper: Verifica si el producto tiene un badge específico
function tieneBadge(producto, textoBadge) {
  const badge = producto.querySelector('.product-badge');
  return badge && badge.textContent.includes(textoBadge) ? 1 : 0;
}

// Evento para el selector de ordenamiento
document.getElementById('sort').addEventListener('change', ordenarProductos);

