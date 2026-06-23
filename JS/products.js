import {createProducts} from "./products-database/products-db.js"
import { renderizarCARDS } from "./renders/render-products-card.js";
import { activarBotonesFavoritos } from "./interaction/add-to-fav.js";

const productosFlex = document.querySelector('#product-wrapper'); 

if (productosFlex) {
    createProducts.forEach(prod => {
        const htmlCard = renderizarCARDS(prod);
        productosFlex.appendChild(htmlCard);
    });

    activarBotonesFavoritos(createProducts)
}