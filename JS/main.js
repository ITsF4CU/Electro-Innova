const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderContainer = document.querySelector('.banners');

let currentIndex = 0;
let autoPlayInterval;

// 2. Función principal para mover el slider
function moveSlider(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } 

    else if (index < 0) {
        currentIndex = slides.length - 1;
    } 
    else {
        currentIndex = index;
    }

    const percentage = currentIndex * -100;
    track.style.transform = `translateX(${percentage / slides.length}%)`; 
    track.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

// 3. Funciones para controlar el Autoplay (Tiempo)
function startAutoplay() {
    autoPlayInterval = setInterval(() => {
        moveSlider(currentIndex + 1);
    }, 4000);
}

function stopAutoplay() {
    clearInterval(autoPlayInterval);
}

// 4. Eventos para que el usuario interactúe con el mouse o celular
sliderContainer.addEventListener('mouseenter', stopAutoplay); 
sliderContainer.addEventListener('mouseleave', startAutoplay); 

// 5. Eventos para los botones (por si el cliente hace clic)
nextBtn.addEventListener('click', () => {
    moveSlider(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    moveSlider(currentIndex - 1);
});

startAutoplay();

// SLIDER DE PRODUCTOS
const prodPrevBtn = document.querySelector('.product-slider .ph-arrow-circle-left');
const prodNextBtn = document.querySelector('.product-slider .ph-arrow-circle-right');

prodNextBtn.addEventListener('click', () => {
    productosTrack.scrollBy({ left: 290, behavior: 'smooth' });
});

prodPrevBtn.addEventListener('click', () => {
    productosTrack.scrollBy({ left: -290, behavior: 'smooth' });
});

// PRODUCTOS

import { createProducts } from "./products-database/products-db.js";
import { mostrarProductosEnPantalla } from "./renders/view-manager.js";

const productosTrack = document.querySelector('.product-slider-track'); 

if (productosTrack) { 
    const productosDestacados = createProducts.filter(prod => prod.destacado === true);
    mostrarProductosEnPantalla(productosDestacados, productosTrack);
}
