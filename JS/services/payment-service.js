import { sessionStorageService } from "./session_storage_service.js";

export const paymentService = {
    getUserCards() {
        const currentUser = sessionStorageService.getCurrentUser();
        if (!currentUser) return [];

        const storageKey = `tarjetas_${currentUser.email}`;
        return JSON.parse(localStorage.getItem(storageKey)) || [];
    },

    saveCard(nuevaTarjeta) {
        const currentUser = sessionStorageService.getCurrentUser();
        if (!currentUser) return false;

        const storageKey = `tarjetas_${currentUser.email}`;
        const tarjetas = this.getUserCards();
        
        tarjetas.push(nuevaTarjeta);
        localStorage.setItem(storageKey, JSON.stringify(tarjetas));
        return true;
    },

    hasPaymentMethod() {
        return this.getUserCards().length > 0;
    }
};