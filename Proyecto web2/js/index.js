const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);
   
//----------EMPIEZA EL CARRITO
function agregarAlCarrito(producto) {
  const carrito = document.getElementById('carrito');
  const nuevoProducto = document.createElement('div');
  nuevoProducto.textContent = producto;
  carrito.appendChild(nuevoProducto);
}
 
