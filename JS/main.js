import { indexSessionManager } from "./index/index-session-manager.js";

// 1. Seleccionamos los elementos clave del DOM
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderContainer = document.querySelector('.banners'); // Para detectar el mouse

let currentIndex = 0;
let autoPlayInterval;

// 2. Función principal para mover el slider
function moveSlider(index) {
    // Si el índice se pasa del último banner, vuelve al primero (0)
    if (index >= slides.length) {
        currentIndex = 0;
    } 
    // Si se va por debajo de cero (al tocar "atrás" en el primero), va al último
    else if (index < 0) {
        currentIndex = slides.length - 1;
    } 
    else {
        currentIndex = index;
    }

    // Calculamos el desplazamiento: cada banner se mueve un 100% hacia la izquierda
    const percentage = currentIndex * -100;
    track.style.transform = `translateX(${percentage / slides.length}%)`; 
    // Nota: Como el track mide 300%, debemos moverlo -100% para que se desplaze entero. 
    // Dividiendo por slides.length nos aseguramos que el salto sea exacto por pantalla.
    // Una forma más simple si el track midiera igual que el contenedor padre es:
    track.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

// 3. Funciones para controlar el Autoplay (Tiempo)
function startAutoplay() {
    autoPlayInterval = setInterval(() => {
        moveSlider(currentIndex + 1);
    }, 4000); // Cambia cada 4 segundos (4000 milisegundos)
}

function stopAutoplay() {
    clearInterval(autoPlayInterval); // Frena el contador
}

// 4. Eventos para que el usuario interactúe con el mouse o celu
sliderContainer.addEventListener('mouseenter', stopAutoplay); // Frena si el mouse está arriba
sliderContainer.addEventListener('mouseleave', startAutoplay); // Sigue cuando el mouse se va

// 5. Eventos para los botones (por si el cliente hace clic)
nextBtn.addEventListener('click', () => {
    moveSlider(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    moveSlider(currentIndex - 1);
});

// 6. Arrancamos el slider automático apenas carga la página
startAutoplay();

// SLIDER DE PRODUCTOS
// Seleccionamos los botones específicos del slider de productos
const prodPrevBtn = document.querySelector('.product-slider .ph-arrow-circle-left');
const prodNextBtn = document.querySelector('.product-slider .ph-arrow-circle-right');

// Al hacer clic a la derecha, avanzamos el scroll
prodNextBtn.addEventListener('click', () => {
    // 250px del ancho de la tarjeta + 40px del gap = 290px
    productosTrack.scrollBy({ left: 290, behavior: 'smooth' });
});

// Al hacer clic a la izquierda, retrocedemos el scroll
prodPrevBtn.addEventListener('click', () => {
    productosTrack.scrollBy({ left: -290, behavior: 'smooth' });
});

// PRODUCTOS

import { createProducts } from "./products-database/products-db.js";

function renderizarCARDS(producto) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <div class="product-image">
            <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="product-info">
            <p class="pName">${producto.nombre}</p>
            <p class="pPrice">$${producto.precio}</p>
            <p class="pCuotas">${producto.cuotas}</p>
            <p class="pSend">${producto.envio}</p>
        </div>
        <div class="add-to-cart">
            <button data-id="${producto.id}">Añadir al carrito</button>
        </div>
        <button class="fav-button"><i class="ph-duotone ph-heart"></i></button>`
        ;
    return card
};


// CORRECCIÓN: Apuntamos directo a la pista del slider de productos con un nombre único
const productosTrack = document.querySelector('.product-slider-track'); 
if (productosTrack) { // Buena práctica: verificar que exista en el HTML actual
    createProducts.forEach(prod => {
        if (prod.destacado == true) {
        // Le pasamos el objeto 'prod' directamente a la función de renderizado
        const htmlCard = renderizarCARDS(prod);
        
        // Lo metemos en el contenedor
        productosTrack.appendChild(htmlCard);
        }
    });
}

indexSessionManager.init();
