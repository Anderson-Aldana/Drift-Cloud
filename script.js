// Script para Drift & Cloud

// Función para pedir producto por WhatsApp
function pedirProducto(nombre) {
  const telefono = '51976404496';
  const mensaje = `¡Hola Drift & Cloud! Estoy interesado en el producto: ${nombre}. ¿Podrían darme más información?`;
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
  // Verificación de edad si aplica
  if (typeof checkAge === 'function') checkAge();

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Efecto de carga inicial
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 300);

  // Scroll: mostrar/ocultar header y botón WhatsApp
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    const whatsappBtn = document.querySelector('.whatsapp-float');
    const header = document.querySelector('.main-header');

    if (whatsappBtn) {
      whatsappBtn.style.transform = currentScroll > lastScroll && currentScroll > 100 ? 'translateY(100px)' : 'translateY(0)';
    }

    if (header) {
      header.style.transform = currentScroll > lastScroll && currentScroll > 100 ? 'translateY(-100%)' : 'translateY(0)';
    }

    lastScroll = currentScroll;
  });

  // Toggle de filtros
  const toggle = document.getElementById('filterToggle');
  const dropdown = document.getElementById('filterDropdown');
  if (toggle && dropdown) {
    toggle.addEventListener('click', function() {
      this.classList.toggle('active');
      dropdown.classList.toggle('active');
    });
  }

  // Aplicar filtros automáticamente al cambiar opción
  document.querySelectorAll('.filter-dropdown input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', aplicarFiltros);
  });

  // Limpiar filtros
  const btnLimpiar = document.getElementById('limpiarFiltros');
  if (btnLimpiar) {
    btnLimpiar.addEventListener('click', function() {
      document.querySelectorAll('.filter-dropdown input[type="radio"]').forEach(radio => {
        if (radio.name === 'marca' || radio.name === 'categoria') {
          radio.checked = radio.value === 'todas';
        }
        if (radio.name === 'orden') {
          radio.checked = radio.value === 'mas-vendidos';
        }
      });
      aplicarFiltros();
    });
  }
});

// Aplicar filtros y orden
function aplicarFiltros() {
  const marca = document.querySelector('input[name="marca"]:checked')?.value || 'todas';
  const categoria = document.querySelector('input[name="categoria"]:checked')?.value || 'todas';
  const orden = document.querySelector('input[name="orden"]:checked')?.value || 'mas-vendidos';

  filtrarProductos(marca, categoria);
  ordenarProductos(orden);
}

// Filtrado por marca y categoría
function filtrarProductos(marca, categoria) {
  document.querySelectorAll('.product-card').forEach(producto => {
    const prodMarca = producto.getAttribute('data-marca');
    const prodCategoria = producto.getAttribute('data-category');
    const visible = (marca === 'todas' || prodMarca === marca) &&
                    (categoria === 'todas' || prodCategoria === categoria);
    producto.style.display = visible ? 'block' : 'none';
  });
}

// Ordenamiento por criterio
function ordenarProductos(criterio) {
  const contenedor = document.querySelector('.products-grid');
  if (!contenedor) return;

  const productos = Array.from(document.querySelectorAll('.product-card'))
    .filter(p => p.style.display !== 'none');

  productos.sort((a, b) => {
    switch (criterio) {
      case 'precio-asc':
        return extraerPrecio(a) - extraerPrecio(b);
      case 'precio-desc':
        return extraerPrecio(b) - extraerPrecio(a);
      case 'novedades':
        return tieneBadge(b, 'Nuevo') - tieneBadge(a, 'Nuevo');
      case 'mas-vendidos':
      default:
        return tieneBadge(b, 'Más vendido') - tieneBadge(a, 'Más vendido');
    }
  });

  productos.forEach(p => contenedor.appendChild(p));
}

// Extraer precio
function extraerPrecio(producto) {
  const precio = producto.querySelector('.price')?.textContent || '';
  return Number(precio.replace(/[^\d]/g, '')) || 0;
}

// Verificar badge
function tieneBadge(producto, texto) {
  const badge = producto.querySelector('.product-badge');
  return badge && badge.textContent.includes(texto) ? 1 : 0;
}

