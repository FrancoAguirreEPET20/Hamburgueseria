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

        const item = document.createElement('div');
    item.classList.add('item-carrito');
    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="info">
        <h4>${producto.nombre}</h4>
        <p>Precio: $${producto.precio}</p>
      </div>
      <div class="cantidad">
        <input type="number" min="1" value="${producto.cantidad}" data-index="${index}">
      </div>
      <button class="eliminar" data-index="${index}">🗑️</button>
    `;
    listaCarrito.appendChild(item);
  });

    totalElement.textContent = total.toFixed(2);
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

listaCarrito.addEventListener('input', (e) => {
  if (e.target.type === 'number') {
    const index = e.target.dataset.index;
    carrito[index].cantidad = parseInt(e.target.value);
    renderCarrito();
  }
});