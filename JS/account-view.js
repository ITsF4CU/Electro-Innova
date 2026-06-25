import { sessionStorageService } from "./services/session_storage_service.js";
import { userStorageService } from "./services/user_storage_service.js";
import { paymentService } from "./services/payment-service.js";
import { orderService } from "../JS/services/order-service.js";
import { renderOrderCards } from "./renders/render-orders.js";
import { initPaymentModal } from "../JS/renders/render-payment-modal.js";
import { renderizarCardFavorito } from "./renders/render-favorite-products-in-account.js";

document.addEventListener('DOMContentLoaded', () => {
    // CONTROL DE ACCESO
    const currentUser = sessionStorageService.getCurrentUser();

    if (!currentUser) {
        alert("Para ver tu cuenta, primero debes iniciar sesión.");
        window.location.href = "login.html";
        return;
    }

    // Actualizar nombre en el header si existe el elemento personalizado
    const userBtn = document.getElementById('user-btn');
    if (userBtn && currentUser) {
        const primerNombre = currentUser.name.trim().split(" ")[0];
        userBtn.innerHTML = `<i class="ph ph-user-circle"></i> Hola, ${primerNombre}`;
        userBtn.setAttribute('href', 'account.html');
    }

    // CAPTURA DE CONTENEDORES CLAVE
    const dashboardSections = document.querySelector('.dashboard-sections');
    const menuItems = document.querySelectorAll('.aside-option');

    // Secciones HTML fijas para envolver las cards dinámicas de pedidos
    const filterHeaderHTML = `
        <section class="orders-filters">
            <div class="search-input-container">
                <input type="text" placeholder="Buscar por número de pedido o producto...">
                <i class="ph ph-magnifying-glass"></i>
            </div>
            <div class="filter-dropdowns">
                <select class="status-filter">
                    <option>Todos los estados</option>
                    <option value="delivered">Entregado</option>
                    <option value="in-transit">En camino</option>
                    <option value="preparing">En preparacion</option>
                    <option value="cancelled">Cancelado</option>
                </select>
                <select class="time-filter">
                    <option value="all-time">Todos los tiempos</option>
                    <option value="last-3-months">Últimos 3 meses</option>
                    <option value="last-month">Último mes</option>
                    <option value="last-year">Último año</option>
                </select>
            </div>
        </section>
    `;

    const helpSectionHTML = `
        <section class="help-section">
            <div class="help-content">
                <div class="help-icon-container">
                    <i class="ph ph-headset"></i>
                </div>
                <div class="help-text">
                    <h4>¿Necesitas ayuda con tu pedido?</h4>
                    <p>Nuestro equipo de atención está disponible para ayudarte.</p>
                </div>
            </div>
            <button class="btn-support">
                <i class="ph ph-headset"></i>
                Contactar soporte
            </button>
        </section>
    `;

    // Renderizado dinámico de la pestaña Pedidos
    function mostrarPestañaPedidos() {
        const pedidosReales = orderService.getUserOrders();
        const cardsRenderizadas = renderOrderCards(pedidosReales);

        dashboardSections.innerHTML = `
            ${filterHeaderHTML}
            <section class="orders-list">
                ${cardsRenderizadas}
            </section>
            ${helpSectionHTML}
        `;
    }

    mostrarPestañaPedidos();

    // DICCIONARIO DE CONTENIDOS DINÁMICOS
    const getContenidoDinamico = (opcion) => {
        const tarjetasReales = paymentService.getUserCards();

        const vistasContenido = {
            "resumen": `
                <div style="background: white; padding: 25px; border-radius: 12px; border: 1px solid gainsboro;">
                    <h3 style="margin-bottom: 15px; color: #1e293b;">¡Hola, ${currentUser.name}!</h3>
                    <p style="color: #64748b; margin-bottom: 20px;">Bienvenido al panel de gestión de tu cuenta en Electro Innova.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                            <h4 style="color: #3030b4; margin-bottom: 5px;">Email Registrado</h4>
                            <p style="font-size: 0.9rem; color: #334155;">${currentUser.email}</p>
                        </div>
                        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                            <h4 style="color: #3030b4; margin-bottom: 5px;">Estado de Cuenta</h4>
                            <p style="font-size: 0.9rem; color: #334155;">Cliente Activo</p>
                        </div>
                    </div>
                </div>
            `,
            "direcciones": `
                <div style="background: white; padding: 25px; border-radius: 12px; border: 1px solid gainsboro;">
                    <h3 style="margin-bottom: 15px; color: #1e293b;"><i class="ph ph-map-pin" style="color: black"></i> Mis Direcciones</h3>
                    <div id="addresses-wrapper" style="display: flex; flex-direction: column; gap: 10px;">
                        ${(!currentUser.addresses || currentUser.addresses.length === 0) ?
                    `<p style="color: #64748b; font-style: italic;">No tenés direcciones asociadas.</p>` :
                    currentUser.addresses.map((addr, index) => `
                                <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; ${index === 0 ? 'border-left: 4px solid #3030b4;' : ''}">
                                    <p style="font-weight: 600; color: #1e293b;">Domicilio de Entrega ${index === 0 ? 'Principal' : ''}</p>
                                    <p style="font-size: 0.9rem; color: #64748b; margin: 5px 0;">${addr.street}, ${addr.city}, ${addr.state} (CP: ${addr.zip})</p>
                                    ${index === 0 ? `<span style="font-size: 0.8rem; background: #e2e8f0; padding: 3px 8px; border-radius: 4px; color: #475569;">Predeterminado</span>` : ''}
                                </div>
                            `).join('')
                }
                    </div>
                    <button id="btn-add-address-view" style="margin-top: 15px; background: #3030b4; color: white; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-weight: 500;">
                        + Agregar nueva dirección
                    </button>
                </div>
            `,
            "métodos de pago": `
                <div style="background: white; padding: 25px; border-radius: 12px; border: 1px solid gainsboro;">
                    <h3 style="margin-bottom: 15px; color: #1e293b;"><i class="ph ph-credit-card" style="color: black"></i> Métodos de Pago</h3>
                    <div id="cards-wrapper" style="display: flex; flex-direction: column; gap: 10px;">
                        ${tarjetasReales.length === 0 ?
                    `<p style="color: #64748b; font-style: italic;">No tenés tarjetas asociadas.</p>` :
                    tarjetasReales.map(tarjeta => `
                                <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; gap: 15px;">
                                    <div style="font-size: 2rem; color: #1e293b;"><i class="ph ph-credit-card"></i></div>
                                    <div>
                                        <p style="font-weight: 600; color: #1e293b;">${tarjeta.banco || 'Tarjeta'} **** ${tarjeta.numero ? tarjeta.numero.slice(-4) : '4321'}</p>
                                        <p style="font-size: 0.85rem; color: #64748b;">Vence: ${tarjeta.vencimiento || 'MM/AA'}</p>
                                    </div>
                                </div>
                            `).join('')
                }
                    </div>
                    <button id="btn-add-card-view" style="margin-top: 15px; background: none; border: 1px dashed #3030b4; color: #3030b4; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-weight: 500; width: 100%;">
                        Asociar nueva tarjeta de crédito o débito
                    </button>
                </div>
            `,
            "favoritos": `
                <div style="background:white; padding:25px; border-radius:12px; border:1px solid gainsboro;">
                    <h3 style="margin-bottom:20px;color:#1e293b;">
                        <i class="ph ph-heart" style="color:black"></i>
                        Mis Favoritos
                    </h3>

                    <div id="favoritos-container" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:20px;"></div>
                </div>
            `,
            "configuración": `
                <div style="background: white; padding: 25px; border-radius: 12px; border: 1px solid gainsboro;">
                    <h3 style="margin-bottom: 20px; color: #1e293b;"><i class="ph ph-gear" style="color:black"></i> Configuración de la Cuenta</h3>
                    <form id="config-form" style="display: flex; flex-direction: column; gap: 15px; max-width: 400px;">
                        <div>
                            <label style="display: block; font-size: 0.85rem; color: #475569; margin-bottom: 5px;">Nombre Completo</label>
                            <input type="text" id="config-name" value="${currentUser.name}" style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px;" required>
                        </div>
                        <div>
                            <label style="display: block; font-size: 0.85rem; color: #475569; margin-bottom: 5px;">Correo Electrónico</label>
                            <input type="email" id="config-email" value="${currentUser.email}" style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px;" required>
                        </div>
                        <div>
                            <label style="display: block; font-size: 0.85rem; color: #475569; margin-bottom: 5px;">Nueva Contraseña</label>
                            <input type="password" id="config-password" placeholder="••••••••" style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px;">
                        </div>
                        <button type="submit" style="background: #3030b4; color: white; border: none; padding: 10px; border-radius: 6px; font-weight: 500;">Guardar Cambios</button>
                    </form>
                </div>
            `
        };
        return vistasContenido[opcion];
    };

    // MANEJO DE CLICKS EN EL ASIDE
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => {
                i.style.background = 'none';
                i.style.fontWeight = 'normal';
            });

            item.style.background = '#f1f5f9';
            item.style.fontWeight = '600';

            const opcionSeleccionada = item.textContent.trim().toLowerCase();

            if (opcionSeleccionada === 'mis pedidos') {
                mostrarPestañaPedidos();
            } else {
                const contenidoHtml = getContenidoDinamico(opcionSeleccionada);
                if (contenidoHtml) {
                    dashboardSections.innerHTML = contenidoHtml;

                    if (opcionSeleccionada === "favoritos") {

                        const favoritos =
                            JSON.parse(localStorage.getItem("favoritos")) || [];

                        const container =
                            document.getElementById("favoritos-container");

                        if (favoritos.length === 0) {

                            container.innerHTML = `
                                <p style="
                                    color:#64748b;
                                    font-style:italic;
                                    grid-column:1/-1;
                                ">
                                    No tenés productos guardados en tu lista de favoritos todavía.
                                </p>
                            `;

                        } else {

                            favoritos.forEach(producto => {
                                container.appendChild(
                                    renderizarCardFavorito(producto)
                                );
                            });

                        }
                    }
                }
            }
        });
    });

    // FUNCIONALIDAD CERRAR SESIÓN
    const logoutItem = document.getElementById('aside-logout-btn');
    if (logoutItem) {
        logoutItem.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
                sessionStorageService.logout();
                window.location.href = "index.html";
            }
        });
    }

    // MANEJO DEL MODAL DE METODOS DE PAGO
    const modal = document.getElementById('payment-modal');
    const addCardForm = document.getElementById('add-card-form');
    const closeModalBtn = document.getElementById('close-modal-btn');

    dashboardSections.addEventListener('click', (e) => {
        if (e.target.closest('#btn-add-card-view')) {
            modal.classList.add('active');
        }
    });

    initPaymentModal(modal, addCardForm, closeModalBtn, () => {
        const contenidoActualizado = getContenidoDinamico("métodos de pago");
        dashboardSections.innerHTML = contenidoActualizado;
    });

    // MANEJO DEL MODAL DE DIRECCIONES
    const addressModal = document.getElementById('address-modal');
    const addAddressForm = document.getElementById('add-address-form');
    const closeAddressModalBtn = document.getElementById('close-address-modal-btn');

    dashboardSections.addEventListener('click', (e) => {
        if (e.target.closest('#btn-add-address-view')) {
            addressModal.classList.add('active');
        }
    });

    closeAddressModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addressModal.classList.remove('active');
        addAddressForm.reset();
    });

    addressModal.addEventListener('click', (e) => {
        if (e.target === addressModal) {
            addressModal.classList.remove('active');
            addAddressForm.reset();
        }
    });

    addAddressForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const street = document.getElementById('address-street').value;
        const city = document.getElementById('address-city').value;
        const state = document.getElementById('address-state').value;
        const zip = document.getElementById('address-zip').value;

        if (!currentUser.addresses) {
            currentUser.addresses = [];
        }

        currentUser.addresses.push({ street, city, state, zip });
        userStorageService.updateUser(currentUser);

        // Actualiza la pestaña de direcciones
        const contenidoActualizado = getContenidoDinamico("direcciones");
        dashboardSections.innerHTML = contenidoActualizado;

        addressModal.classList.remove('active');
        addAddressForm.reset();
        alert('Dirección guardada con éxito.');
    });

    // MANEJO DE ACTUALIZACIÓN DE CONFIGURACIÓN
    dashboardSections.addEventListener('submit', (e) => {
        if (e.target.id === 'config-form') {
            e.preventDefault();

            const newName = document.getElementById('config-name').value.trim();
            const newEmail = document.getElementById('config-email').value.trim();
            const newPassword = document.getElementById('config-password').value.trim();

            if (newName) {
                currentUser.name = newName;

                // Se actualiza el nombre en el header
                const userBtn = document.getElementById('user-btn');
                if (userBtn) {
                    const primerNombre = currentUser.name.split(" ")[0];
                    userBtn.innerHTML = `<i class="ph ph-user-circle"></i> Hola, ${primerNombre}`;
                }
            }

            if (newEmail) {
                currentUser.email = newEmail;
            }

            if (newPassword) {
                currentUser.password = newPassword;
            }

            userStorageService.updateUser(currentUser);
            alert("Los datos de tu cuenta han sido actualizados con éxito.");

            // Se limpia el campo de contraseña por seguridad
            document.getElementById('config-password').value = '';
        }
    });

    // EVENTOS PARA LOS BOTONES DE PRODUCTOS FAVORITOS
    dashboardSections.addEventListener('click', (e) => {
        const card = e.target.closest('.fav-product-card');
        if (!card) return;

        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

        const nombreProducto = card.querySelector('.fav-info-container h4').textContent.trim();
        const productoSeleccionado = favoritos.find(prod => prod.nombre === nombreProducto);

        if (!productoSeleccionado) return;

        //BOTON: QUITAR DE FAVORITOS
        if (e.target.closest('.btn-fav-remove')) {
            favoritos = favoritos.filter(prod => prod.nombre !== nombreProducto);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));

            const container = document.getElementById("favoritos-container") || document.getElementById("fav-products-container");
            if (container) {
                container.innerHTML = '';
                if (favoritos.length === 0) {
                    container.innerHTML = `<p style="color:#64748b; font-style:italic;">No tenés productos guardados en tu lista de favoritos todavía.</p>`;
                } else {
                    favoritos.forEach(prod => {
                        container.appendChild(renderizarCardFavorito(prod));
                    });
                }
            }
        }

        // BOTON: AGREGAR AL CARRITO
        else if (e.target.closest('.btn-fav-add-cart')) {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const indexEnCarrito = carrito.findIndex(item => item.nombre === productoSeleccionado.nombre);

            if (indexEnCarrito !== -1) {
                carrito[indexEnCarrito].cantidad += 1;
            } else {
                carrito.push({
                    id: productoSeleccionado.id,
                    nombre: productoSeleccionado.nombre,
                    precio: productoSeleccionado.precio,
                    imagen: productoSeleccionado.imagen,
                    categoria: productoSeleccionado.categoria || 'Electrónica',
                    envio: productoSeleccionado.envio || 'Envío gratis',
                    cantidad: 1
                });
            }


            localStorage.setItem('carrito', JSON.stringify(carrito));

            alert(`¡"${productoSeleccionado.nombre}" se agregó al carrito correctamente!`);
        }
    });

    // DETALLE DE PRODUCTOS ADQUIRIDOS (MODAL DE COMPRA)

    dashboardSections.addEventListener('click', (e) => {
        const btnDetails = e.target.closest('.btn-details');
        if (!btnDetails) return;

        const orderId = btnDetails.dataset.orderId;

        const ordenes = orderService.getUserOrders();
        const ordenSeleccionada = ordenes.find(o => o.id === orderId);

        if (!ordenSeleccionada) return;

        const modalDetalle = document.createElement('div');
        modalDetalle.id = 'order-details-modal';

        const totalOrden = typeof ordenSeleccionada.total === 'string' ? ordenSeleccionada.total : `$${ordenSeleccionada.total.toLocaleString('es-AR')}`;

        const itemsHtml = ordenSeleccionada.productos.map(prod => {
            const precioProd = typeof prod.precio === 'string' ? prod.precio : `$${prod.precio.toLocaleString('es-AR')}`;
            return `
                <div class="modal-product-item">
                    <img src="${prod.imagen}" alt="${prod.titulo}" class="modal-product-img">
                    <div class="modal-product-info">
                        <h5>${prod.titulo}</h5>
                        <p>Cantidad: ${prod.cantidad} &bull; ${precioProd} c/u</p>
                    </div>
                </div>
            `;
        }).join('');

        modalDetalle.innerHTML = `
            <div class="modal-details-box">
                <button id="close-details-modal"><i class="ph ph-x"></i></button>
                
                <h3>Detalle del Pedido</h3>
                <p class="modal-details-sub">ID: ${ordenSeleccionada.id} &bull; Realizado el ${ordenSeleccionada.fecha}</p>
                
                <div class="modal-products-list">
                    ${itemsHtml}
                </div>
                
                <div class="modal-total-container">
                    <span class="modal-total-label">Total Abonado:</span>
                    <span class="modal-total-value">${totalOrden}</span>
                </div>
                
                <button id="btn-close-details-bottom">Entendido</button>
            </div>
        `;

        document.body.appendChild(modalDetalle);

        // Destruir el modal cuando decidan cerrarlo
        const cerrarModal = () => modalDetalle.remove();
        document.getElementById('close-details-modal').addEventListener('click', cerrarModal);
        document.getElementById('btn-close-details-bottom').addEventListener('click', cerrarModal);
        modalDetalle.addEventListener('click', (event) => {
            if (event.target === modalDetalle) cerrarModal();
        });
    });
});


