import {createProducts} from "./products-database/products-db.js"
import { renderizarCARDS } from "./renders/render-products-card.js";

// Apuntamos al contenedor de la GRILLA (Flex-wrap)
const productosFlex = document.querySelector('#product-wrapper'); 

// Recorremos los mismos productos, pero los colgamos en la grilla
if (productosFlex) {
    createProducts.forEach(prod => {
        const htmlCard = renderizarCARDS(prod); // Usás la MISMA función mágica
        productosFlex.appendChild(htmlCard);    // La metés en la grilla limpia
    });
}