// IMPORTAMOS LA SESION DEL USUARIO PARA QUE SE MUESTRE SU NOMBRE EN EL HEADER.
import { sessionStorageService } from '../services/session_storage_service.js';

// EL OBJETIVO DE ESTE JS ES HACER QUE EL HEADER MUESTRE EL NOMBRE DEL USUARIO
// CUANDO HA INICIADO SESION.

// Empezamos agregandole un evento a TODO el documento HTML sobre el que este script este,
// y va a escuchar la carga de la pagina, es decir, se va a activar cuando haya cargado del todo:
document.addEventListener('DOMContentLoaded', () => {


    // Guardamos en una variable el elemento dentro del header que muestra
    // el boton de Iniciar sesion.
    const accountHeaderLink = document.querySelector('.name-of-user');

    // Si existe ese boton:
    if (accountHeaderLink) {

        // Guardamos el nombre del usuario logueado dentro de una variable.
        const currentUser = sessionStorageService.getCurrentUser();

        // Ahora, si el usuario ha iniciado sesion:
        if (currentUser !== undefined && currentUser !== null) {
            
            // Cambiamos el redireccionamiento de ese boton, que por defecto,
            // lo manda al inicio de sesion si no esta logueado, al de la cuenta.
            accountHeaderLink.setAttribute('href', 'account.html');
            
            // Cambiamos el texto "Mi cuenta" por el nombre real del usuario (o el primer nombre)
            const primerNombre = currentUser.name.trim().split(" ")[0];
            
            // Buscamos el nodo de texto o reemplazamos manteniendo el icono de Phosphor
            accountHeaderLink.innerHTML = `Hola, ${primerNombre}`; 
            
        } else {
            // 3. Si NO tiene sesión, nos aseguramos de que mande a la pagina de iniciar sesion.
            accountHeaderLink.setAttribute('href', 'login.html');
        }
    }
});