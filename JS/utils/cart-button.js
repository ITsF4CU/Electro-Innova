import { sessionStorageService } from "../services/session_storage_service.js"

export function activarBotonesCarrito(baseDeDatos) {
    const cartButtons = document.querySelectorAll('.add-to-cart button');

    cartButtons.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const productoId = Number(e.target.dataset.id);
            const currentUser = sessionStorageService.getCurrentUser();

            if (currentUser === undefined) {
                alert("Para añadir productos al carrito primero debes iniciar sesion.");
                window.location.href = "login.html";
                return
            }

            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            const productoExiste = carrito.find(prod => prod.id === productoId);

            if (productoExiste) {
                productoExiste.cantidad++;
            } else {
                const productoOriginal = baseDeDatos.find(prod => prod.id === productoId);
                
                const nuevoProducto = { ...productoOriginal, cantidad: 1 };
                carrito.push(nuevoProducto);
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));

            alert("¡Producto añadido al carrito con éxito!");
        });
    });
}

// BOTONES DE CANTIDAD:
export function amountButtons() {
    const menos = document.querySelector('#minus');
    const mas = document.querySelector('#plus');    
    menos.addEventListener('click', (e) => {
    })
}