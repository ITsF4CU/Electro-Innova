export function renderizarCARDS(producto) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.setAttribute('data-id', producto.id);
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
        <button class="fav-button" data-id="${producto.id}"><i class="ph-duotone ph-heart"></i></button>`
        ;
    
    card.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart') || e.target.closest('.fav-button')) {
            return; 
        }
        
        window.location.href = `products-detail.html?id=${producto.id}`;
    });

    return card;
};