const listaCarrito = document.getElementById('lista-carrito');
const totalElement = document.getElementById('total');
const vaciarBtn = document.getElementById('vaciar-carrito');

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function renderCarrito() {
  listaCarrito.innerHTML = '';
  let total = 0;

    carrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;