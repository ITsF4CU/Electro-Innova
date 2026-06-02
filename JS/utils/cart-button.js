import { createProducts } from "../products-database/products-db.js";
// 1. Importás tu nueva herramienta elástica
// JS/utils/cart-buttons.js

// Creamos una función y le metemos el EXPORT para que la use cualquiera
export function activarBotonesCarrito(baseDeDatos) {
    
    // 1. Buscamos los botones en la pantalla actual
    const cartButtons = document.querySelectorAll('.add-to-cart button');

    // 2. Escuchamos los clics
    cartButtons.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const productoId = Number(e.target.dataset.id);

            // 3. Traemos el carrito del localStorage
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            // 4. Verificamos si ya existe
            const productoExiste = carrito.find(prod => prod.id === productoId);

            if (productoExiste) {
                productoExiste.cantidad++;
            } else {
                // ¡Acá está el truco! Usamos "baseDeDatos" que entra por el parámetro de la función
                const productoOriginal = baseDeDatos.find(prod => prod.id === productoId);
                
                const nuevoProducto = { ...productoOriginal, cantidad: 1 };
                carrito.push(nuevoProducto);
            }

            // 5. Guardamos en el localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));

            alert("¡Producto añadido al carrito con éxito!");
        });
    });
}
// 2. Al final, después de que el forEach inyectó las tarjetas, la ejecutás:
activarBotonesCarrito(createProducts);


// BOTONES DE CANTIDAD:
export function amountButtons() {
    const menos = document.querySelector('#minus');
    const mas = document.querySelector('#plus');
    
    menos.addEventListener('click', (e) => {
        
    })
}