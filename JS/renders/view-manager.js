import { renderizarCARDS } from './render-products-card.js';
import { activarBotonesCarrito } from '../utils/cart-button.js'; 
import { activarBotonesFavoritos } from '../interaction/add-to-fav.js';

/**
 * 
 * @param {Array}
 * @param {HTMLElement}.
 */
export function mostrarProductosEnPantalla(productos, contenedor) {
    if (!contenedor) return;
    

    contenedor.innerHTML = ""; 


    productos.forEach(prod => {
        const htmlCard = renderizarCARDS(prod); 
        contenedor.appendChild(htmlCard); 
    });


    if (typeof activarBotonesCarrito === 'function') {
        activarBotonesCarrito(productos);
    }
    if (typeof activarBotonesFavoritos === 'function') {
        activarBotonesFavoritos(productos);
    }
}