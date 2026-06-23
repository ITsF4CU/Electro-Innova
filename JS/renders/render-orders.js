export function renderOrderCards(ordersArray) {
    if (!ordersArray || ordersArray.length === 0) {
        return `
            <div style="text-align: center; padding: 40px; color: #666;">
                <i class="ph ph-package" style="font-size: 3rem; color: #ccc; display:block; margin-bottom:10px;"></i>
                <p>Todavía no realizaste ninguna compra.</p>
            </div>
        `;
    }

    return ordersArray.map(order => {
        
        const primerProducto = order.productos[0] || { 
            name: "Producto Electro", 
            image: "Images/Products/conjunto-frigorificos-plata-realistas-varios-tamanos-aislado-blanco.png" 
        };
        
        const cantidadProductos = order.productos.length;

        
        let statusClass = "text-grey";
        let statusIcon = "ph-clipboard-text";
        let statusText = `En preparacion &bull; Entrega estimada: ${order.entregaEstimada}`;

        if (order.estado === 'Entregado') {
            statusClass = "";
            statusIcon = "ph-truck";
            statusText = `Entregado el ${order.fecha}`;
        } else if (order.estado === 'En camino') {
            statusClass = "text-blue";
            statusIcon = "ph-truck";
            statusText = `En camino &bull; Entrega estimada: ${order.entregaEstimada}`;
        }

        const totalFormateado = typeof order.total === 'number' 
            ? `$${order.total.toLocaleString('es-AR')}` 
            : order.total;

        
        return `
            <div class="order-card" data-order-id="${order.id}">
                <div class="order-card-main">
                    <div class="order-card-left">
                        <div class="order-image-container">
                            <img src="${primerProducto.image || primerProducto.imagen}" alt="${primerProducto.name || primerProducto.titulo}" class="order-card-image">
                        </div>
                        <div class="order-info">
                            <h4>${primerProducto.name || primerProducto.titulo} ${cantidadProductos > 1 ? `(+${cantidadProductos - 1})` : ''}</h4>
                            <p>${order.fecha} &bull; Pedido #${order.id}</p>
                        </div>
                    </div>
                <div class="order-card-right">
                    <span class="order-price">${totalFormateado}</span>
                    <button class="btn-details" data-order-id="${order.id}">Ver detalles</button>
                    <i class="ph ph-caret-right right-arrow-icon"></i>
                </div>
                </div>
                <div class="order-card-footer">
                    <div class="delivery-status ${statusClass}">
                        <i class="ph ${statusIcon}"></i>
                        <span>${statusText}</span>
                    </div>
                    <div class="product-count">
                        <i class="ph ph-package"></i>
                        <span>${cantidadProductos} ${cantidadProductos === 1 ? 'producto' : 'productos'}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}