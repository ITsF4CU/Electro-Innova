export function cartRender(prod) {
    const container = document.createElement('div');
    container.classList.add('product-horizontal-card');

    container.innerHTML = `
        <div class="product-presentation">
            <div class="product-image">
                <img src="${prod.imagen}">
            </div>
            <div class="product-info" style="display: flex; gap: 10px; flex-direction: column">
                <h3 style="font-family: Montserrat, sans-serif">${prod.nombre}</h3>
                <p style="font-family: Montserrat, sans-serif; font-weight: bold; color: green">$${prod.precio}</p>
                <p style="font-family: Montserrat, sans-serif; font-weight: bold;">${prod.categoria}</p>
                <p style="font-family: Montserrat, sans-serif; font-weight: bold;">${prod.envio}</p>
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

