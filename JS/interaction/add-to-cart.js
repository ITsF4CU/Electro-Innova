import {createProducts} from "../products-database/products-db.js"
import { activarBotonesCarrito } from "../utils/cart-button.js";
import {cartRender} from "../renders/render-cart-products.js"

// 1. Apuntamos al contenedor blanco donde querés colgar las tarjetas horizontales
const cartWrapper = document.querySelector('.products-cart-wrapper');

function inicializarCarrito() {
    // 2. Leemos lo que guardó la otra página en el localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Limpiamos el contenedor (borramos los divs de prueba que tenías fijos en el HTML)
    if (cartWrapper) {
        cartWrapper.innerHTML = '';

        // 3. Si el carrito está vacío, mostramos un mensaje lindo
        if (carrito.length === 0) {
            cartWrapper.innerHTML = `<p class="empty-message">Tu carrito está completamente vacío.</p>`;
            return;
        }

        // 4. Si hay productos, usamos tu función molde para crearlos e inyectarlos
        carrito.forEach(producto => {
            const tarjetaHorizontal = cartRender(producto);
            cartWrapper.appendChild(tarjetaHorizontal);
        });
    }
}

// Ejecutamos la función apenas se abre la página cart.html
inicializarCarrito();