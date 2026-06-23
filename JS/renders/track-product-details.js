import { createProducts } from "../products-database/products-db.js";
import { mostrarProductosEnPantalla } from "./view-manager.js";


const parametrosURL = new URLSearchParams(window.location.search);
const idProductoActual = parseInt(parametrosURL.get('id'));


// CONFIGURACIÓN DEL SLIDER (SCROLL HORIZONTAL)

const prodPrevBtn = document.querySelector('.product-slider .ph-arrow-circle-left');
const prodNextBtn = document.querySelector('.product-slider .ph-arrow-circle-right');
const productosTrack = document.querySelector('.product-slider-track'); 

if (productosTrack) {
    prodNextBtn.addEventListener('click', () => {
        productosTrack.scrollBy({ left: 290, behavior: 'smooth' });
    });

    prodPrevBtn.addEventListener('click', () => {
        productosTrack.scrollBy({ left: -290, behavior: 'smooth' });
    });
}

// PARTE DE LOS PRODUCTOS RELACIONADOS XDDDDD (ERA NECESARIO EN ESTA SECCION)

// Aplicamos un condicional donde le decimos que si hay algo en el track de productos,
// y el id del producto que se esta mostrando en la pagina NO es NO-un-numero,
// me crea una variable donde recibe un parametro prod (sacado de la base de datos)
// y guarda la id del producto que se esta mostrando en el detalle general.

// Despues aplico otro condicional donde si la variable productoActual tiene algo,
// creamos otra variable donde vamos a filtrar los productos que coincidan con el producto actual
// y obviamente que no tengan la misma ID para no ver duplicados en el track.

// cuando termina el primer condicional, por las dudas volvemos a recorrer la base de datos, si resulta que
// que la base de datos no tiene ningun otro producto que coincida con la categoria del producto actual,
// nos va a filtrar por el atributo destacad, para que nos muestre solamente los productos destacados otra vez, que no repitan la misma id del que se esta mostrando.
if (productosTrack && !isNaN(idProductoActual)) {
    const productoActual = createProducts.find(prod => prod.id === idProductoActual);

    if (productoActual) {
        let productosRelacionados = createProducts.filter(prod => 
            prod.categoria === productoActual.categoria && prod.id !== idProductoActual
        );

        if (productosRelacionados.length === 0) {
            productosRelacionados = createProducts.filter(prod => prod.destacado === true && prod.id !== idProductoActual);
        }

        mostrarProductosEnPantalla(productosRelacionados, productosTrack);
    }
}