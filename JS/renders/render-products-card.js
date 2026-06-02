export function renderizarCARDS(producto) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <div class="product-image">
            <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="product-info">
            <p class="pName">${producto.nombre}</p>
            <p class="pPrice">$${producto.precio}</p>
            <p class="pCuotas">${producto.cuotas}</p>
            <p class="pSend">${producto.envio}</p>
        </div>
        <div class="add-to-cart">
            <button data-id="${producto.id}">Añadir al carrito</button>
        </div>
        <button class="fav-button"><i class="ph-duotone ph-heart"></i></button>`
        ;
    return card
};
