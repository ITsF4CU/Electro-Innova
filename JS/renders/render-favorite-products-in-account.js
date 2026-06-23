export function renderizarCardFavorito(prod) {
    const card = document.createElement('div');
    card.classList.add('fav-product-card');
    
    const precioMostrar = typeof prod.precio === 'string' ? prod.precio : prod.precio.toLocaleString('es-AR');

    card.innerHTML = `
        <div class="fav-img-container">
            <img src="${prod.imagen}" alt="${prod.nombre}">
        </div>
        <div class="fav-info-container">
            <h4>${prod.nombre}</h4>
            <span class="fav-price">$${precioMostrar}</span>
            <p class="fav-category">${prod.categoria || 'Electrónica'}</p>
        </div>
        <div class="fav-actions-container">
            <button class="btn-fav-add-cart" data-id="${prod.id}">
                <i class="ph ph-shopping-cart-simple"></i> Agregar al carrito
            </button>
            <button class="btn-fav-remove" data-id="${prod.id}">
                <i class="ph ph-trash"></i> Quitar
            </button>
        </div>
    `;
    return card;
}