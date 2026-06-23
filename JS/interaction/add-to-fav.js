// IMPORTAMOS LA CLASE QUE GUARDA LA SESION DEL USUARIO.

import { sessionStorageService } from "../services/session_storage_service.js";

// Para este JS, el objetivo es sencillo muchachos:
// OBJETIVO: Darle una interaccion al usuario para que este pueda agregar productos
// a favoritos.


// Vamos a empezar creando una funcion modular para que podamos reutilizarla en otros archivos JS,
// siempre utilizando export y luego, donde la tengamos que usar, la importamos usando import.
export function activarBotonesFavoritos(baseDeDatos) {
    
    // JS debe saber a que elemento estamos intentando darle la funcionalidad, por lo que vamos a crear una variable
    // constante donde del HTML, vamos a llamar a TOOOOOODOS los elementos que tengan la clase .fav-button que tengan
    // las tarjetas de cada producto, en una sola variable.
    const favButtons = document.querySelectorAll('.fav-button');

    // Una vez que JS sabe que elementos vamos a modificar, vamos a recorrer esa variable con los mismos.
    // Con un bucle forEach vamos a agregarle una escucha o un evento (addEventListener), que va a estar al tanto
    // de lo que el usuario haga. Si el usuario hace click, el evento se va a llevar a cabo.
    favButtons.forEach(boton => {

        // Los botones reciben el evento, y con una funcion flecha vamos a especificar el comportamiento del evento.
        boton.addEventListener('click', (e) => {


            // Creamos una variable donde va a guardar el producto del cual proviene el boton de favoritos,
            // esto se hace mas que nada para que si el producto tiene una id, no tengamos que navegar en la base de datos.
            const botonContenedor = e.target.closest('.fav-button');
            const productoId = Number(botonContenedor.dataset.id);


            // AQUI IMPLICAMOS LA VERIFICACION DEL INICIO DE SESION.
            // Guardamos en una variable la sesion del usuario.
            const currentUser = sessionStorageService.getCurrentUser();

            // Si resulta ser que no hay ninguna sesion registrada en el localStorage:
            if (currentUser === undefined) {

                // Le mostramos una alerta al usuario que le va a solicitar iniciar sesion...
                alert("Para añadir productos a tus favoritos primero debes iniciar sesión.");

                // Y lo redirige a la pagina de inicio de sesion y registro.
                window.location.href = "login.html";

                // Y la funcion se corta y no sigue, ademas de no gaurdar nada.
                return;
            }

            // Si existe una sesion, traemos del almacenamiento local todo lo que esta guardado en el array
            // favoritos, o si no hay nada nos entrega uno vacio para que no nos calce un error bien piola ahi.
            // Obviamente hay que convertirlo a un array comun y legible para JS.
            let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

            // Ahora, dentro de una variable yaEsFavorito, vamos a verificar si en el array
            // hay algun producto cuya id coincida con el producto que el usuario quiere agregar a favoritos.
            const yaEsFavorito = favoritos.find(prod => prod.id === productoId);

            // Aplicamos un condicional que pregunta: ¿Existe un producto cuya id coincida con el que
            // se esta intentando agregar a favoritos?
            if (yaEsFavorito) {

                // Si ya estaba, LO BORRAMOS POR COMPLETO (Obviamente sin alterar el renderizado,
                // para ello aplicamos el metodo filter que va a mostrar los productos cuya id no coincidan
                // con el que se intento agregar).
                favoritos = favoritos.filter(prod => prod.id !== productoId);

                // Y se muestra un mensaje de eliminacion.
                alert("Eliminado de tus favoritos");


                // ESTA PARTE ES MAS QUE NADA UNA FUNCION TIPO SWITCH, COMO PRENDER Y APAGAR LA LUZ
                // SOBRE EL CORAZON PARA AGREGAR A FAVORITOS, SI NO EXISTE Y LE DAMOS AL CORAZON DE UN PRODUCTO,
                // LO AGREGA A FAVORITOS. SI ESE MISMO PRODUCTO YA EXISTE EN FAVORITOS, DIRECTAMENTE EL CORAZON ACTUA COMO
                // UN BOTON DE BORRADO DE FAVORITO.


            } else {
                // Ahora, si no estaba en favoritos, directamente lo buscamos en la base de datos,
                // lo agregamos al array de favoritos.
                const productoOriginal = baseDeDatos.find(prod => prod.id === productoId);
                favoritos.push(productoOriginal);

                // Le mostramos al usuario un mensaje para hacerle saber que ya lo añadio a favoritos.
                alert("¡Añadido a tus favoritos!");
            }

            // Despues de todo, guardamos el nuevo array de favoritos al localStorage para actualizarlo.
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
        });
    });
}