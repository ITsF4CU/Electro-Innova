// Bueeeeeenas, primero, este archivo tiene como objetivo renderizar todo lo que ya estructuramos en la funcion
// de cartRender (que es la que renderiza los productos del carrito);

// Primero importamos los modulos para que podamos reutilizarlos y ser mas ordenados, estos son:
// CREATEPRODUCTS: Es la base de datos que ya hemos creado, que tiene todo los productos con su imagen, precio, etc.

// ACTIVARBOTONESCARRITO: Es la funcion que exportamos que agrega los eventos a los botones de las cards de los productos AÑADIR AL CARRITO.

// SESSIONSTORAGESERVICE: Es la clase que exportamos desde sessionStorageService que mantiene los datos del usuario
// guardados para no perderse entre paginas.

// PAYMENTSERVICE: Es la funcion que guarda el metodo de pago del Usuario logueado, y permite borrar o agregar el mismo.

// ORDERSERVICE: Es el archivo encargado de traer del almacenamiento local lo que el usuario termino de comprar.


import { createProducts } from "../products-database/products-db.js";
import { activarBotonesCarrito } from "../utils/cart-button.js";
import { cartRender } from "../renders/render-cart-products.js";
import { sessionStorageService } from "../services/session_storage_service.js";
import { paymentService } from "../services/payment-service.js";
import { orderService } from "../services/order-service.js"; // Con guion medio como lo tenés vos



// Para comenzar el script primero debemos indicarle a JS que elementos son los que va a modificar,
// en este caso es la grlla de los productos, y luego la grilla donde se va a mostrar toda
// la suma de los precios de los productos agregados.
const cartWrapper = document.querySelector('.products-cart-wrapper');
const buyContainer = document.querySelector('.payment-info'); 


// Iniciamos la funcion llamada inicializarCarrito:
function inicializarCarrito() {

    // Primero traemos del array del carrtio que se encuentra en el almacenamiento local del navegador,
    // Como el array esta en formato JSON, debemos convertirlo a un array comun de vuelta, si es que no hay
    // nada nos puede directamente traer el array vacio, para evitar problemas. 
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Ahora, el sistema debe saber que es lo que va a imprimir en el caso de que el carrito este vacio.
    if (cartWrapper) {

        // Si el elemento donde se van a mostrar los productos existe, debemos vaciarlo en caso de que
        // tenga algo que no deberia mostrarse, esto se hace para evitar duplicados al renderizar elementos dinamicos desde JS.
        cartWrapper.innerHTML = '';

        // Otro condicional, aqui verificamos si el array del carrito es igual 0
        if (carrito.length === 0) {

            // Si lo es, directamente en la grilla de los productos nos va a mostrar un mensaje, que nos dice
            // explicitamente que el carrito se encuentra vacio.
            cartWrapper.innerHTML = `<p class="empty-message" style="font-family: Montserrat, sans-serif; font-weight: bold">Tu carrito está completamente vacío.</p>`;

            // Y por ende forzamos al resumen del carrito a cambiar todas las sumas de productos a 0.
            actualizarResumenCompra(0);

            // Y lo mantiene asi con el return para que al salir y volver a entrar, no se muestre de vuelta lo que en
            // teoria ya se borro.
            return;
        }

        // Ahora bien, es momento de renderizar los productos en la grilla de productos en el carrito.
        // Para ello, JS debe saber si hay productos dentro del carrito, por lo que lo recorremos con un bucle forEach
        // en el que le vamos a dar como parametro el producto dentro del array del carrito.
        carrito.forEach(producto => {

            // A cada producto lo vamos a renderizar dentro de una variable con la funcion
            // que hemos traido exclusivamente para renderizar.
            const tarjetaHorizontal = cartRender(producto);

            // Con appendChild, le vamos a dar a la grilla de productos dentro del carrito cada una
            // de las cards, es decir, las vamos a sumar como elementos dentro del HTML como si realmente
            // la hubieramos escrito dentro del documento HTML.
            cartWrapper.appendChild(tarjetaHorizontal);
        });

        // Y una vez que se termina de renderizar cada producto,
        // damos paso a la funcion que va a calcular el precio de cada uno.
        calcularYActualizarTotales(carrito);
    }
}


// EL SIGUIENTE PASO ES CREAR LA FUNCION ENCARGADA DE CALCULAR EL TOTAL DE TODOS LOS PRODUCTOS QUE
// EXISTEN EN EL ARRAY DEL CARRITO. Para ello le vamos a pasar como parametro el array del carrito,
// es decir que la funcion va actuar sobre todo el array.
function calcularYActualizarTotales(carrito) {

    // Para empezar la funcion vamos a declarar una variable de tipo numerica que va a arrancar,
    // esto va a servir como almacenamiento para despues mostrar el precio (que se va a guardar aqui)
    let subtotal = 0;
    
    // Como JS debe saber que calcular, volvemos a recorrer con un bucle forEach al array del carrito.
    carrito.forEach(prod => {

        // Dentro del bucle, por cada objeto que se recorra le vamos a guardar el precio en una variable
        // llamada precioLimpio. Aqui se guardara el precio de cada producto iterado.
        let precioLimpio = prod.precio;
        
        // Ahora, para que no hayan errores matematicos ni tampoco de renderizado, debemos saber que tipo
        // de dato esta guardando el array, especificamente que tipo de dato es el atributo precio dentro de la base de datos
        // de los productos. Para ello usamos un condicional con typeOf.
        if (typeof precioLimpio === 'string') {

            // Si resulta ser que el tipo de dato del atributo precio dentro de la base de datos es string,
            // le decimos al sistema que a todo lo que hay dentro de ese string que NO SEA un numero del 0 al 9,
            // lo vamos a reemplzar por un valor numerico para poder operar sobre el despues.
            precioLimpio = parseFloat(precioLimpio.replace(/[^0-9.-]+/g, ""));
        }
        
        // Una vez que tenemos guardados los precios, vamos a guardar la cantidad de cada uno para sumar el mismo
        // precio al resumen.
        // Para ello guardamos en una variable cantidad la CANTIDAD de los productos dentro del array del carrito,
        // y lo vamos a convertir a un numero entero, o de ultima si el usuario no añadio al carrito el mismo producto
        // simplemente le guardamos un solo producto.
        const cantidad = parseInt(prod.cantidad) || 1;

        // De ahi hacemos el calculo correspondiente, y lo guardamos en la variable subtotal,
        // y el proceso se va a repetir en cada producto que se recorra.
        subtotal += precioLimpio * cantidad;
    });

    // Evidentemente inicializamos la funcion.
    actualizarResumenCompra(subtotal);
}

// Y UNA VEZ QUE YA TENEMOS EL SUBTOTAL, TAN SOLO QUEDA RENDERIZARLO CORRECTAMENTE:

// Para ello creamos la funcion encargada de renderizar todo el resumen de la compra,
// esta funcion va a recibir como paramatro la variable en la que hemos guardado el calculo.
function actualizarResumenCompra(subtotal) {

    // Para empezar la funcion, añadimos un condicional.
    if (!buyContainer) return;

    // Si resulta ser que el contenedor donde se supone que vamos a crear visualmente el resumen
    // no existe, directamente no renderizamos nada.

    // Si existe, creamos dos variables, una ternaria, y otra donde se va a guardar el total.
    // La variable costoEnvio es una variable ternaria anidada, es decir, tenemos un if y else que no se ven
    // y preguntamos: Si el subtotal (precio) es mayor a 0, volvemos a preguntar si el subtotal es mayor 150000,
    // si lo es, el engio va a ser GRATUITO, si no pasa de ese numero, el envio va a costar 4500.
    // Si ninguna condicion se cumple, directamente el envio costara 0.
    const costoEnvio = subtotal > 0 ? (subtotal > 150000 ? 0 : 4500) : 0;


    // De ahi, creamos la variable donde vamos a calcular el costo de los productos en total,
    // y el envio.
    const total = subtotal + costoEnvio;


    // Ahora, al contenedor del HTML le vamos a agregar los siguientes elementos, que son los que
    // se renderizan para mostrarnos el total de los productos, el envio, y el boton para realizar la compra. 
    buyContainer.innerHTML = `
        <div class="buy-title">
            <h3>Resumen de compra</h3>
        </div>
        <hr>
        <div class="buy-resume">
            <div class="products-resume">
                <p>Productos</p>
                <span>$${subtotal.toLocaleString('es-AR')}</span>
            </div>
            <div class="shipping-resume">
                <p>Envío</p>
                <span>${costoEnvio === 0 ? 'Gratis' : `$${costoEnvio.toLocaleString('es-AR')}`}</span>
            </div>
        </div>
        <hr>
        <div class="total-resume">
            <p>Total</p>
            <span>$${total.toLocaleString('es-AR')}</span>
        </div>
        <div class="btn-buy-container">
            <button id="btn-procesar-compra" class="btn-buy" ${subtotal === 0 ? 'disabled' : ''}>
                Continuar compra
            </button>
        </div>
    `;


    // AHORA, PARA FINALIZAR LA FUNCION DEL RENDERIZADO:

    // Vamos a guardar en una variable al elemento renderizado desde JS, que es el boton de compra,
    const btnComprar = document.getElementById('btn-procesar-compra');

    // Vamos a agregar un condicional para que funcione correctamente, ya que como no existe nativamente dentro
    // del documento HTML, es posible que hayan fallos a la hora de querer darle una funcion ya que JS no lo va a encontrar
    // siendo un elemento renderizado.
    if (btnComprar) {

        // Por lo que preguntamos ¿El boton comprar existe?:

        // Si existe, le agregamos un evento que va a escuchar el click del usuario.
        // Cuando le de a comprar, se va a activar la funcion de manejarFlujoDeCompra, que es la funcion encargada
        // de llevarla al resumen de la cuenta.
        btnComprar.addEventListener('click', manejarFlujoDeCompra);
    }
}

// AHORA SI, PASAMOS A LA FUNCION DE MANEJARFLUJODECOMPRA, ESTA SE VA A ENCARGAR DE PROCESAR
// LA COMPRA Y GUARDARLA EN UN ARRAY PARA DESPUES MOSTRARLA EN EL RESUMEN DE PEDIDOS DENTRO DE LA 
// PAGINA DE MI CUENTA.

// Empezamos creando la funcion de manejarFlujoDeComora:
function manejarFlujoDeCompra() {


    // En primer lugar vamos a verificar que el usuario realmente existe, por lo que guardamos sus
    // datos dentro de la variable currentUser
    const currentUser = sessionStorageService.getCurrentUser();

    // Usamos un condicional
    if (!currentUser) {

        // Si el usuario no existe, o no ha iniciado sesion, le va a mostrar una alerta diciendole
        // que para finalizar la compra debe o registrarse, o iniciar sesion.
        alert("Para finalizar la compra, debes iniciar sesión.");

        // Una vez que le muestra la alerta y el usuario le da a aceptar, lo redirige a la pagina
        // dedicada al inicio de sesion y al registro (que es login.html)
        window.location.href = "login.html";

        // Y luego con return, hace que la funcion no concluya su flujo, reiniciandola.
        return;
    }

    // Ahora, si existe el usuario y esta logueado, vamos a traer y guardar lo que tiene en el carrito de compras
    // en la variable carrito. Obviamente primero convertimos el array JSON en uno comun y corriente, legible para JS.
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Aplicamos un condicional, donde preguntamos: ¿El carrito no tiene nada?
    if (carrito.length === 0) {

        // Si es asi, si el carrito no tiene nada, muestra una alerta diciendo que el carrito se encuentra vacio.
        alert("Tu carrito está vacío.");

        // Y no deja que la funcion siga avanzando.
        return;
    }

    // Ahora, gracias a un molde que hicimos en el archivo PAYMENT-SERVICE
    // Vamos a comprobar si el usuario tiene un metodo de pago.
    // Guardamos en una variable el metodo de pago que ha agregado el usuario.
    const tieneTarjeta = paymentService.hasPaymentMethod();

    // Con un condicional le decimos al sistema: Si el usuario NO tiene tarjeta;
    if (!tieneTarjeta) {

        // Cuando quiera finalizar la compra, le va a saltar una alerta diciendole que no tiene ningun metodo
        // de pago asignado.
        alert("No tienes ningún método de pago asociado a tu cuenta.\nSerás redirigido para registrar una tarjeta.");

        // Por lo cual lo va a redirigir a la pagina de la cuenta para que pueda agregar un metodo correspondiente de pago.
        window.location.href = "account.html";

        // Si no tiene tarjeta, no deja que la funcion siga avanzando.
        return;
    }

    // AHORA, TOCA CREAR LA ESTRUCTURA DONDE VAMOS A GUARDAR LA ORDEN O EL RECIBO DE LAS COMPRAS DEL USUARIO.

    // Primero definimos una variable subtotal, que va a arrancar en el valor 0
    let subtotal = 0;

    // Creamos una variable llamada productosOrden que va a almacenar una funcion.
    const productosOrden = carrito.map(prod => {

        // Con el metodo map, dentro de la variable vamos a guardar el precio de cada producto.
        let precioLimpio = prod.precio;

        // Volvemos a verificar si el precio del producto esta en formato string, y lo convertimos a un valor numerico.
        if (typeof precioLimpio === 'string') {
            precioLimpio = parseFloat(precioLimpio.replace(/[^0-9.-]+/g, ""));
        }

        // En el subtotal guardamos el total de los productos.
        subtotal += precioLimpio * prod.cantidad;

        // Y nos va a devolver el nombre de cada producto, su imagen, su precio, y la cantidad del mismo.
        return {
            titulo: prod.nombre,
            imagen: prod.imagen,
            precio: precioLimpio,
            cantidad: prod.cantidad
        };
    });

    // Volvemos a aplicar una variable ternaria, en la variable costoEnvio si el subtotal pasa
    // de los 150000 pesos, va a pasar a valer 0 el costo del envio, si no pasa, el envio
    // va a costar 4500 pesos.
    const costoEnvio = subtotal > 150000 ? 0 : 4500;

    // calculamos el total final de los productos.
    const totalFinal = subtotal + costoEnvio;

    // Una vez que terminamos de fabricar la estructura de la orden, guardamos esa orden en el localStorage.
    const ordenCreada = orderService.createOrder(productosOrden, totalFinal);

    // Si la orden creada existe, es decir, se realizo correctamente el pago:
    if (ordenCreada) {

        // Le mostramos una alerta al usuario indicandole que se realizo correctamente la compra.
        alert(`¡Compra procesada con éxito!\nCódigo de Pedido: ${ordenCreada.id}\n¡Muchas gracias por elegir Electro Innova!`);
        
        // Se vacia el carrito para que cuando volvamos a ingresr no aparezca nada.
        localStorage.removeItem('carrito');
        
        // Y una vez se realiza el pago, lo mandamos al usuario a la cuenta para que pueda ver la orden de lo que compro.
        window.location.href = "account.html";
    } else {

        // Si nada de esto se cumple, muestra un mensaje de error.
        alert("Ocurrió un error inesperado al procesar tu pedido.");
    }
}

// Y ponemos en marcha la funcion del carrito.
inicializarCarrito();


// PARA FINALIZAR ESTE ARCHIVO JS, TOCA DARLE LA FUNCIONALIDAD DE AÑADIR, RESTAR O BORRAR ELEMENTOS
// O PRODUCTOS DENTRO DEL CARRITO:

// Empezamos con un condicional, en el que preguntamos: ¿El contenedor donde se mostraran los productos
// existe?:
if (cartWrapper) {

    // Si existe, entonces le vamos a agregar un evento que va a escuchar los clicks del usuario.
    cartWrapper.addEventListener('click', (e) => {

        // Creamos la variable donde se va a guardar todos los productos que existen
        // en el array del carrito, obviamente convirtiendolos a un array normal o
        // directamente si no hay nada, nos entrega un array vacio.
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        
        // En esta parte, JS debe saber a que producto le vamos a sumar, restar o borrar
        // del carrito, como no he metido ningun identificador a las cards del render de JS, vamos a tener
        // que utilizar un target.closest, el cual busca al elemento mas cercano dentro de esa card para usarla
        // como forma de referenciar al producto dentro de la base de datos.
        const tarjeta = e.target.closest('.product-horizontal-card');

        // Si no hay ningun elemento dentro de la card que nos favorezca, directamente no se lleva 
        // a cabo la funcion.
        if (!tarjeta) return;

        // Si existe, gracias a la variable tarjeta que busco que elemento esta mas cerca de lo que estamos
        // buscando, podremos guardar en la variable el elemento que nos sirve para identificar al producto
        // sobre el que estamos interactuando para modificarlo remotamente en la base de datos.

        // Guardamos en una variable el contenido que hay dentro del elemento H3 en el documento HTML sin ningun tipo de espacios
        // en blanco en el.
        const nombreProducto = tarjeta.querySelector('.product-info h3').textContent.trim();

        // En index, vamos a guardar el ID del producto cuyo nombre coincide con el contenido H3 del HTML, 
        const index = carrito.findIndex(prod => prod.nombre === nombreProducto);

        // En el caso de que no haya ningun producto que no coincida con el H3 del HTML, directamente corta la funcion.
        if (index === -1) return;

        

        // TOCA DARLE LA FUNCION AL BOTON MAS:

        // Empezamos con un condicional, donde le preguntamos al sistema: ¿El usuario hizo click
        // en el elemento HTML con el id PLUS o a algo que este dentro de ese elemento?
        if (e.target.matches('#plus') || e.target.closest('#plus')) {

            // Si es asi, el sistema va a aumentar una unidad mas a la cantidad del producto
            // sobre el cual se este interactuando (haciendo clicks basicamente)
            carrito[index].cantidad += 1;
        }

        // LO MISMO QUE EL BOTON SUMAR PERO CON UNA FUNCION NUEVA
        else if (e.target.matches('#minus') || e.target.closest('#minus')) {
            if (carrito[index].cantidad > 1) {
                carrito[index].cantidad -= 1;
            } else {
                // Si la cantidad es 1 y resta, lo removemos por completo
                carrito.splice(index, 1);
            }
        }

        // LO MISMO QUE AL BOTON SUMAR Y RESTAR, PERO ESTA VEZ LO BORRA.
        else if (e.target.closest('.trash')) {
            // Removemos el producto del array directamente
            carrito.splice(index, 1);
        }
        
        // Si no se hizo click en ninguno de esos elementos, directamente la funcion no avanza.
        else {
            return; 
        }

        // Una vez que se completa la funcion, guardamos los cambios hechos en los productos en el array del carrito,
        // en palabras sencillas, actualizamos el carrito xddd
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Y volvemos a renderizar los productos con su cantidad modificada.
        inicializarCarrito(); 
    });
}