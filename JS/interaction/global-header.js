// IMPORTAMOS LA BASE DE DATOS PARA QUE SE MUESTREN LOS NOMRRES COINCIDENTES EN EL BUSCADOR
import {createProducts} from "../products-database/products-db.js";

// EL OBJETIVO DE ESTE ARCHIVO, ES DARLE FUNCIONALIDAD A LA BARRA DE BUSQUEDA DEL HEADER.

// Para ello, llamamos y guardamos a todos los elementos necesarios del HTML para poder darle
// la correspodiente funcionalidad a la barra de tareas. Esos elementos son:


// - La barra de navegacion
// - El boton de busqueda
// - La lista desplegable que muestra a los productos
// - Y el contenedor de esa lista.

const buscador = document.querySelector('#seeker-input');
const buscadorBtn = document.querySelector('#seeker-button');
const list = document.querySelector('#product-list-in-search');
const suggestionContainer = document.querySelector('#suggestions-list');



// Empezamos con un condicional donde le preguntamos al sistema: ¿El input donde se escribe 
// el producto a buscar existe?
if (buscador) {

    // Si existe, le agregamos un evento que va a escuchar cuando el usuario
    // escriba algo.
    buscador.addEventListener('input', () => {

        // Dentro del evento vamos a declarar una variable donde vamos a guardar
        // lo que escribio el valor del input, es decir, lo que escribio el usuario,
        // quitandole los espacios en blanco, y pasando todo el contenido a minusculas.
        const query = buscador.value.trim().toLowerCase();

        // Usamos otro condicional donde le preguntamos al sistema: ¿El input no esta vacio, verdad?
        if (query !== "") {

            // Si no esta vacio y hay algun producto que el usuario ha escrito,
            // le añadimos la clase que activa al contenedor y hace que se muestre
            // debajo de la barra de busqueda, obviamente con la lista vacia
            // para evitar duplicados.
            suggestionContainer.classList.add('active');
            list.innerHTML = "";
            

            // Ahora, en una variable aparte, vamos a guardar los productos que coinciden con lo que 
            // el usuario ha escrito en el buscador.
            // Para ello, dentro de la variable vamos a filtrar la base de datos que hemos creado,
            // entregandonos el nombre de los productos escrito obviamente en minusculas y que en su nombre
            // incluya algun caracter que el usuario ha escrito en la barra de busqueda.
            const coincidencias = createProducts.filter(p => p.nombre.toLowerCase().includes(query));


            // Ahora, le preguntamos al sistema: ¿Hay varios productos que incluyan
            // en su nombre algun caracter que el usuario haya escrito en el buscador?
            if (coincidencias.length > 0) {

                // Si resulta que si, a cada coincidiencia la vamos a recorrer
                // con un bucle forEach.
                coincidencias.forEach(prod => {

                    // Por cada producto iterado, lo vamos a meter en un elemento de lista, para que se muestre bien.
                    const item = document.createElement('li');
                    // Al hacer clic en la sugerencia, viaja directo a la tienda pasando el texto exacto
                    item.innerHTML = `<a href="products.html?search=${encodeURIComponent(prod.nombre.toLowerCase())}">${prod.nombre}</a>`;
                    list.appendChild(item);
                });
            } else {
                // Si no hay coincidencias exactas, le mostramos los relacionados a su busqueda.
                const item = document.createElement('li');
                item.innerHTML = `<span style="color:#64748b; padding:8px 12px; display:block; font-size:0.9rem;">No hay resultados exactos...</span>`;
                list.appendChild(item);
            }
        } else {

            // Si no existe ningun producto que coincida con la busqueda del usuario, directamente quitamos
            // la clase con los estilos que hacen que el container se vea en pantalla.
            suggestionContainer.classList.remove('active');
        }
    });
}

// AHORA CREAMOS LA FUNCION QUE HACE QUE EL USUARIO PUEDA VER LOS RESULTADOS DE SU BUSQUEDA.

// Creamos la funcion que va a ejecutar la busqueda:
function ejecutarBusqueda() {

    // Dentro, declaramos una variable que va a guardar lo que el usuario escribio en la barra de busqueda
    // sin espacion y todo en minuscula.
    const textoBuscado = buscador.value.trim().toLowerCase();

    // Preguntamos al sistema: ¿El input de busqueda no esta vacio?
    if (textoBuscado !== "") {

        // Si no esta vacio, lo redirige al usuario a la pagina de los productos, y le va a mostrar
        // el producto que ha buscado, modificando tambien el link.
        window.location.href = `products.html?search=${encodeURIComponent(textoBuscado)}`;
    }
}


// AHORA LE DAMOS LA FUNCIONALIDAD CORRESPONDIENTE AL BOTON DE LA LUPA:

// Preguntamos: ¿El boton existe en el HTML?
if (buscadorBtn) {

    // Si existe, le agregamos un evento, que va a escuchar los clicks del usuario
    buscadorBtn.addEventListener('click', (e) => {

        // Usamos preventDefault para que el navegador no se reinicie de forma natural,
        // al darle al boton
        e.preventDefault();

        // Guardamos en una variable el texto que el usuario ha ingresado en el buscador sin espacios.
        const termino = buscador.value.trim();

        // Preguntamos: ¿El termino no esta vacio?
        if (termino !== "") {
            

            // Si no esta vacio, al momento de que el usuario le de al boton de la lupa
            // lo va a mandar a la pagina de productos y le va a mostrar el que ha buscado.
            window.location.href = `products.html?search=${encodeURIComponent(termino)}`;
        }
    });
}

// Escuchar si el usuario presiona la tecla "Enter" adentro del input
if (buscador) {
    buscador.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            ejecutarBusqueda();
        }
    });
}

// Cerramos la cajita de sugerencias si hace click afuera
document.addEventListener('click', (e) => {
    if (suggestionContainer && !suggestionContainer.contains(e.target) && e.target !== buscador) {
        suggestionContainer.classList.remove('active');
    }
});