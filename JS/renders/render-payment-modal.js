import { paymentService } from "../services/payment-service.js";

/**
 * @param {HTMLElement}
 * @param {HTMLElement}
 * @param {HTMLElement}
 * @param {Function} 
 */

export function initPaymentModal(modal, form, closeBtn, onCardAddedCallback) {
    if (!modal || !form) return;

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            form.reset(); 
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            form.reset();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 


        const nuevaTarjeta = {
            banco: document.getElementById('card-bank').value.trim(),
            numero: document.getElementById('card-number').value.trim(),
            vencimiento: document.getElementById('card-expiry').value.trim()
        };


        const guardadoExitoso = paymentService.saveCard(nuevaTarjeta);

        if (guardadoExitoso) {
            alert("¡Tarjeta asociada correctamente!");
            modal.classList.remove('active');
            form.reset();


            if (typeof onCardAddedCallback === 'function') {
                onCardAddedCallback();
            }
        } else {
            alert("Hubo un error al intentar guardar la tarjeta.");
        }
    });
}