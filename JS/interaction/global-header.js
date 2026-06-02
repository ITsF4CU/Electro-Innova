import {createProducts} from "../products-database/products-db.js";

// CATEGORIAS 

// agarramos el boton para darle la funcionalidad
const ctgMenu = document.querySelector('.categories');

// agarramos el contenedor del menu para mostrarlo en pantalla
const menu = document.querySelector('.categories-menu');

// Agregamos un evento que se activa solo cuando el usuario hace click sobre el
// boton del menu (cgtMenu), en el que prevenimos acciones aleatorias por culpa del navegador
// y detenemos la propagacion en forma de arbol en eventos que comparten el mismo elemento en el documento
// y una vez que el usuario hace click en el boton, se abre el menu.
ctgMenu.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    menu.classList.toggle('active')
})


// añadimos un evento que permite al usuario poder quitar el menu si es que hace click en cualquier
// parte de la pagina.
document.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
})

// ---------- BUSQUEDA DE PRODUCTOS --------------------

const buscador = document.querySelector('#seeker-input');
const buscadorBtn = document.querySelector('#seeker-button');
const list = document.querySelector('#product-list-in-search');
const suggestionContainer = document.querySelector('#suggestions-list');

buscador.addEventListener('input', (e) => {

    if (buscador.value.trim() !== "" ) {
        suggestionContainer.classList.add('active');

        list.innerHTML = "";
        const productName = buscador.value.toLowerCase();
        for (let i = 0; i < createProducts.length; i++) {
            let currentName = createProducts[i].nombre.toLowerCase();

            if (currentName.includes(productName)) {
                const item = document.createElement('li');

                item.innerHTML = `<a href="products.html">${createProducts[i].nombre}</a>`;

                list.appendChild(item)
            }
        }   

    } else {
        suggestionContainer.classList.remove('active')
    }
});

document.addEventListener('click', (e) => {
    if (suggestionContainer.classList.contains('active')) {
        suggestionContainer.classList.toggle('active')
    }
})