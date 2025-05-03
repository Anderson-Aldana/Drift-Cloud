function pedirProducto(nombre) {
  const telefono = '51987654321'; // Reemplaza con el número del vendedor
  const mensaje = `Hola, quiero pedir el producto: ${nombre}. ¿Está disponible?`;
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}
