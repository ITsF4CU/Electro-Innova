import { createProducts } from '../products-database/products-db.js';
import { mostrarProductosEnPantalla } from '../renders/view-manager.js';

// SELECTORES DE MENÚS DESPLEGABLES
const filterButton = document.getElementById('filter-button');
const filterDropdown = document.getElementById('filter-dropdown');
const orderButton = document.getElementById('order-button');
const orderDropdown = document.getElementById('order-dropdown');

if (filterButton && filterDropdown) {
    filterButton.addEventListener('click', () => {
        filterDropdown.classList.toggle('hidden');
        if (orderDropdown) orderDropdown.classList.add('hidden'); 
    });
}

if (orderButton && orderDropdown) {
    orderButton.addEventListener('click', () => {
        orderDropdown.classList.toggle('hidden');
        if (filterDropdown) filterDropdown.classList.add('hidden'); 
    });
}

window.addEventListener('click', (e) => {
    if (filterButton && filterDropdown && !filterButton.contains(e.target) && !filterDropdown.contains(e.target)) {
        filterDropdown.classList.add('hidden');
    }
    if (orderButton && orderDropdown && !orderButton.contains(e.target) && !orderDropdown.contains(e.target)) {
        orderDropdown.classList.add('hidden');
    }
});


const botonesSeleccion = document.querySelectorAll('.btn-select');
const productWrapper = document.getElementById('product-wrapper');
const categoryTitle = document.querySelector('.section_title h2') || document.querySelector('#section-title');


let productosActualesEnPantalla = [...createProducts];

// DETECTOR DE URL (BUSCADOR Y CATEGORIAS DEL HEADER)
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaURL = urlParams.get('category');
    const busquedaURL = urlParams.get('search');

    if (categoriaURL) {
        const productosFiltrados = createProducts.filter(p => 
            p.categoria && p.categoria.toLowerCase() === categoriaURL.toLowerCase()
        );
        if (categoryTitle) categoryTitle.innerHTML = categoriaURL.charAt(0).toUpperCase() + categoriaURL.slice(1);
        
        productosActualesEnPantalla = productosFiltrados;
        mostrarProductosEnPantalla(productosFiltrados, productWrapper);
    } 
    else if (busquedaURL) {
        const termino = decodeURIComponent(busquedaURL).trim().toLowerCase();
        let resultadosBusqueda = createProducts.filter(p => 
            p.nombre.toLowerCase().includes(termino) || (p.descripcion && p.descripcion.toLowerCase().includes(termino))
        );

        if (categoryTitle) categoryTitle.innerHTML = `Resultados para: "${termino}"`;

        if (resultadosBusqueda.length === 0) {
            if (categoryTitle) categoryTitle.innerHTML = `No hay resultados para "${termino}"`;
            mostrarProductosEnPantalla(createProducts.slice(0, 4), productWrapper); 
        } else {
            productosActualesEnPantalla = resultadosBusqueda;
            mostrarProductosEnPantalla(resultadosBusqueda, productWrapper);
        }
    } 
    else {
        mostrarProductosEnPantalla(createProducts, productWrapper);
    }
});

if (filterDropdown) {
    filterDropdown.addEventListener('click', (e) => {

        const objetivo = e.target.closest('.btn-select');
        

        if (!objetivo) return;

        e.preventDefault();
        e.stopPropagation();


        const tipoFiltro = objetivo.dataset.tipo;
        const valorFiltro = objetivo.dataset.value;
        const categoriaTexto = objetivo.innerText;

        console.log(`Filtrando por Tipo: ${tipoFiltro} | Valor: ${valorFiltro}`);

        if (tipoFiltro && valorFiltro) {
            let productosFiltrados = [];


            if (tipoFiltro === 'categoria') {
                productosFiltrados = createProducts.filter(p => 
                    p.categoria && p.categoria.toLowerCase() === valorFiltro.toLowerCase()
                );
            } 

            else if (tipoFiltro === 'beneficio') {
                productosFiltrados = createProducts.filter(p => {
                    if (valorFiltro === 'envio') {

                        return p.envio && p.envio.toLowerCase().includes('gratis');
                    }
                    if (valorFiltro === 'cuotas') {

                        return p.cuotas && p.cuotas.toLowerCase().includes('interés');
                    }
                    return false;
                });
            }


            if (categoryTitle) {
                categoryTitle.innerHTML = categoriaTexto;
            }


            productosActualesEnPantalla = productosFiltrados;


            mostrarProductosEnPantalla(productosFiltrados, productWrapper);
        }


        filterDropdown.classList.add('hidden');
    });
}

// BOTÓN LIMPIAR FILTROS
const clearFiltersBtn = document.getElementById('clear-filters');
if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
        if (categoryTitle) categoryTitle.innerHTML = "Nuestros productos";
        productosActualesEnPantalla = [...createProducts];
        mostrarProductosEnPantalla(createProducts, productWrapper);
        if (filterDropdown) filterDropdown.classList.add('hidden');
    });
}

// ORDENAMIENTO DE TARJETAS
const orderOptions = document.querySelectorAll('.btn-order');
orderOptions.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const criterio = e.target.dataset.order;
        let productosOrdenados = [...productosActualesEnPantalla];

        if (criterio === 'precio-asc') productosOrdenados.sort((a, b) => a.precio - b.precio);
        else if (criterio === 'precio-desc') productosOrdenados.sort((a, b) => b.precio - a.precio);
        else if (criterio === 'alfa-asc') productosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
        else if (criterio === 'alfa-desc') productosOrdenados.sort((a, b) => b.nombre.localeCompare(a.nombre));

        mostrarProductosEnPantalla(productosOrdenados, productWrapper);
        if (orderDropdown) orderDropdown.classList.add('hidden');
    });
});