const filterButton = document.getElementById('filter-button');
const filterDropdown = document.getElementById('filter-dropdown');

const orderButton = document.getElementById('order-button');
const orderDropdown = document.getElementById('order-dropdown');

// Para abrir o cerrar filtros
filterButton.addEventListener('click', () => {

    // Switchea la clase del contenedor que esta oculto
    filterDropdown.classList.toggle('hidden');
    orderDropdown.classList.add('hidden'); 
});

// Abrir/Cerrar Orden
orderButton.addEventListener('click', () => {
    orderDropdown.classList.toggle('hidden');
    filterDropdown.classList.add('hidden'); // Cierra el otro contenedor
});

// Cerrar si hacen clic afuera de los menús
window.addEventListener('click', (e) => {
    if (!filterButton.contains(e.target) && !filterDropdown.contains(e.target)) {
        filterDropdown.classList.add('hidden');
    }
    if (!orderButton.contains(e.target) && !orderDropdown.contains(e.target)) {
        orderDropdown.classList.add('hidden');
    }
});

// filtro de productos: heladeras 
// Se capturan los elementos que se necesitan del HTML
const botonesSeleccion = document.querySelectorAll('.btn-select');
const productWrapper = document.getElementById('product-wrapper');
const categoryTitle = document.querySelector('#section-title')

// 2. Función auxiliar para limpiar la pantalla y dibujar las tarjetas
// (Uso la función renderizarCARDS que tuve que copiar en este JS)
function mostrarProductos(listaDeProductos) {
    productWrapper.innerHTML = ""; // Vaciamos el flex-wrap para borrar los anteriores
    
    listaDeProductos.forEach(prod => {
        const tarjetaHTML = renderizarCARDS(prod);
        productWrapper.appendChild(tarjetaHTML);
    });
}

// 3. Escuchamos el clic en los botones del menú de filtros
botonesSeleccion.forEach(boton => {
    boton.addEventListener('click', (e) => {
        // Capturamos los "data-" del botón que tocó el usuario
        const tipoFiltro = e.target.dataset.tipo;  // Nos va a dar "categoria" o "beneficio"
        const valorFiltro = e.target.dataset.value; // Nos va a dar "heladeras", "envio", etc.
        const valorFiltroMayus = valorFiltro.charAt(0).toUpperCase() + valorFiltro.slice(1);

        let productosFiltrados = [];

        // Evaluamos qué tipo de filtro quiere aplicar
        if (tipoFiltro === "categoria") {
            // Filtramos el array comparando con la nueva propiedad que agregaste
            productosFiltrados = createProducts.filter(prod => prod.categoria === valorFiltro);
        } else if (tipoFiltro === "beneficio") {
            // Ejemplo por si tocan 'Envío Gratis'
            if (valorFiltro === "envio") {
                productosFiltrados = createProducts.filter(prod => prod.envio.toLowerCase().includes("gratis"));
            }
            // Ejemplo por si tocan 'Cuotas sin interés'
            if (valorFiltro === "cuotas") {
                productosFiltrados = createProducts.filter(prod => prod.cuotas.toLowerCase().includes("sin interes"));
            }
        }

        // 4. Renderizamos el resultado en la grilla
        categoryTitle.innerHTML = `Filtrar por: ${valorFiltroMayus}`
        mostrarProductos(productosFiltrados);


        // 5. Cerramos el menú desplegable automáticamente para que vean el cambio
        filterDropdown.classList.add('hidden');
    });
});



// 6. Lógica para el botón de "Limpiar Filtros"
document.getElementById('clear-filters').addEventListener('click', () => {
    mostrarProductos(createProducts); // Le pasamos el array original completo
    filterDropdown.classList.add('hidden');
    categoryTitle.innerHTML = "Nuestros productos"
});


// ORDENAR PRODUCTOS
const orderOptions = document.querySelectorAll('.btn-order');

orderOptions.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const criterio = e.target.dataset.order;
        const criterioText = e.target.innerText;

        let productosOrdenados = [...createProducts];

        if (criterio === 'precio-asc') {
            productosOrdenados.sort((a, b) => a.precio - b.precio);
        } else if (criterio === 'precio-desc') {
            productosOrdenados.sort((a, b) => b.precio - a.precio);
        } else if (criterio === 'alfa-asc') {
            productosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
        } else if (criterio === 'alfa-desc') {
            productosOrdenados.sort((a, b) => b.nombre.localeCompare(a.nombre));
        }

        categoryTitle.innerHTML = `Ordenar por: ${criterioText}`
        mostrarProductos(productosOrdenados);

        orderDropdown.classList.add('hidden')
    });
});

