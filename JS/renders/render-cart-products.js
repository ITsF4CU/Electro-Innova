export function cartRender(prod) {
    const container = document.createElement('div');
    container.classList.add('product-horizontal-card');

    container.innerHTML = `
        <div class="product-presentation">
            <div class="product-image">
                <img src="${prod.imagen}">
            </div>
            <div class="product-info">
                <h3>${prod.nombre}</h3>
                <p>$${prod.precio}</p>
                <p>${prod.categoria}</p>
                <p>${prod.envio}</p>
            </div>
        </div>
        <div class="cart-options-on-product">
            <div class="amount">
                <button class="summary" id="minus">-</button>
                <p class="amount-number">${prod.cantidad}</p>
                <button class="summary" id="plus">+</button>
            </div>
            <span class="delete-product-container">
                <button class="trash"><i class="ph ph-trash"></i></button>
            </span>
        </div>`;

    return container
} 

