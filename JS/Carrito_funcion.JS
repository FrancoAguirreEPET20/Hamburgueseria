function agregarAlCarrito(nombre, precio, imagen) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

   const existente = carrito.find(item => item.nombre === nombre);

     if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ nombre, precio, imagen, cantidad: 1 });
  }

    localStorage.setItem('carrito', JSON.stringify(carrito));
  alert(`${nombre} agregado al carrito 🛒`);
}
