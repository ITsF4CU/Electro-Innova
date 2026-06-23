import { sessionStorageService } from "./session_storage_service.js";

export const orderService = {
    // Obtener los pedidos del usuario con sesión activa
    getUserOrders() {
        const currentUser = sessionStorageService.getCurrentUser();
        if (!currentUser) return [];

        // Clave única basada en el email del usuario logueado
        const storageKey = `pedidos_${currentUser.email}`;
        return JSON.parse(localStorage.getItem(storageKey)) || [];
    },

    // Guardar un nuevo pedido tras simular la compra exitosa en el carrito
    createOrder(productos, total) {
        const currentUser = sessionStorageService.getCurrentUser();
        if (!currentUser) return false;

        const storageKey = `pedidos_${currentUser.email}`;
        const pedidos = this.getUserOrders();

        const nuevaOrden = {
            id: `EI-${new Date().getFullYear()}-${1000 + pedidos.length + 1}`,
            fecha: new Date().toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' }),
            productos: productos, // Array de productos comprados
            total: total,
            estado: 'En preparacion', // Estado por defecto
            entregaEstimada: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })
        };

        pedidos.unshift(nuevaOrden); // Agregamos al inicio para que se vea primero la última compra
        localStorage.setItem(storageKey, JSON.stringify(pedidos));
        return nuevaOrden;
    }
};