// ESTE ARCHIVO NO ES MAS QUE UN JS PARA ANIMAR LA SECCION DE LAS PREGUNTAS
// QUE MAS SE HACEN.

// Primero le añadimos un evento a TOOOOOOODO el documento HTML de las preguntas o el FAQ.
// Este evento va a escuchar al navegador, cuando cargue la pagina o el documento HTML en su totalidad,
// va a arrancar el evento.
document.addEventListener('DOMContentLoaded', () => {

    // Llamamos a TODOS los contenedores llamados .accordio-header que tienen el titulo y la descripcion de la pregunta,
    // guardandola en una variable para despues modificar su estilo.
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // Recorremos a cada elemento guardado en la variables que hemos creado,
    // y la recorremos con un bucle forEach para hacer los cambios correspondientes.
    accordionHeaders.forEach(header => {

        // A cada contenedor iterado le vamos a agregar un evento que va a escuchar
        // cuando el usuario haga click sobre el:
        header.addEventListener('click', () => {

            // Guardamos en una variable al contenedor padre del que ya hemos 
            // guardado en accordionHeaders, y el contenido de cada uno de los contenedores
            // de la variable accordionHeaders.
            const currentItem = header.parentElement;
            const currentContent = currentItem.querySelector('.accordion-content');

            // Vamos a guardar en isOpen la clase .active perteneciente al contenedor
            // padre de la pregunta, que es la que tiene los estilos que hace que se muestre en pantalla.
            const isOpen = currentItem.classList.contains('active');


            // A todos los contenedores padre, los vamos a recorrer, y le vamos a quitar
            // la clase que hace que se muestren en pantalla.
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = null;
            });

            // Ahora, si no existe ninguna clase perteneciente al elemento padre que hace que se muestre en pantalla,
            // la añade para poder visualizar la respuesta de cada pregunta.
            if (!isOpen) {
                currentItem.classList.add('active');
                // scrollHeight le dice a JS cuántos píxeles mide el elemento por dentro
                currentContent.style.maxHeight = currentContent.scrollHeight + "px";
            }
        });
    });
});