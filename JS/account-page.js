document.addEventListener('click', (evento) => {
    const clickInDropdownBtn = evento.target.closest('.dropdown-icon-btn');

    if (clickInDropdownBtn) {
        const dropdownOptions = clickInDropdownBtn.parentElement.querySelector('.dropdown-icon-btn-options');

        if (dropdownOptions) {
            if (dropdownOptions.style.display === 'none' || dropdownOptions.style.display === '') {
                dropdownOptions.style.display = 'flex';
                setTimeout(() => {
                    dropdownOptions.style.opacity = '1';
                }, 10);

            } else {
                hideElement(dropdownOptions);
            }
        }

    } else {
        const todosLosHijos = document.querySelectorAll('.dropdown-icon-btn-options');
        todosLosHijos.forEach(hijo => {
            hideElement(hijo);
        });
    }
});

function hideElement(element) {
    element.style.opacity = '0';
    setTimeout(() => {
        element.style.display = 'none';
    }, 200);
}

const dashboardContainer = document.querySelector("#dashboard-container");

const asideOptions = document.querySelectorAll('.aside-option');


const htmlResumen = `
<section class="account-info-section">
    <div class="account-info">
        <div class="account-initials">
            <h2>SA</h2>
        </div>

        <div class="account-details">
            <h3>Santino Albornoz</h3>
            <span>sanalbor32@gmail.com</span>
            <span>+54 9 11 6439 4831</span>
        </div>
    </div>

    <button type="button" id="edit-profile-btn">
        <i class="ph ph-pencil-simple"></i>
        Editar perfil
    </button>
</section>

<section class="summary-sections">
    <section class="summary-section" id="orders-section">
        <div class="summary-section-header">
            <h4>Mis pedidos recientes</h4>
            <a href="">Ver todos</a>
        </div>

        <div class="summary-section-item">
            <div class="item-left">
                <img src="Images/Products/conjunto-frigorificos-plata-realistas-varios-tamanos-aislado-blanco.png"
                    class="order-image">

                <div class="order-product">
                    <span class="order-card-info">Pedido #1234567890</span>
                    <h3>Nombre del producto</h3>
                    <span class="order-card-info">15 Mayo 2026</span>
                </div>
            </div>

            <div class="item-right">
                <div class="order-details">
                    <span>Cantidad: 1</span>
                    <h4>$45000</h4>
                </div>

                <div>
                    <i class="ph ph-caret-right summary-section-item-icon"></i>
                </div>
            </div>
        </div>
    </section>

    <section class="summary-section" id="address-section">
        <div class="summary-section-header">
            <h4>Direcciones guardadas</h4>
            <a href="">Ver todos</a>
        </div>

        <div class="summary-section-item">
            <div class="item-left">
                <div class="">
                    <i class="ph ph-house-line saved-adress-icon"></i>
                </div>
                <div class="summary-address-details">
                    <div id="main-address">
                        <h3>Dirección 1</h3>
                        <div class="main-badge">
                            <span>Principal</span>
                        </div>
                    </div>
                    <span>Calle Falsa 123</span>
                    <span>1234567890</span>
                </div>
            </div>

            <div class="dropdown-icon-btn-container">
                <button class="dropdown-icon-btn"><i class="ph ph-dots-three-vertical"></i></button>
                <div class="dropdown-icon-btn-options">
                    <div class="dropdown-icon-btn-option"><i class="ph ph-pencil"></i>Editar</div>
                    <div class="dropdown-icon-btn-option"><i class="ph ph-trash"></i>Eliminar</div>
                </div>
            </div>
        </div>

        <div class="summary-section-item">
            <div class="item-left">
                <div class="">
                    <i class="ph ph-building-office saved-adress-icon"></i>
                </div>
                <div class="summary-address-details">
                    <h3>Dirección 2</h3>
                    <span>Calle Falsa 123</span>
                    <span>1234567890</span>
                </div>
            </div>

            <div class="dropdown-icon-btn-container">
                <button class="dropdown-icon-btn"><i class="ph ph-dots-three-vertical"></i></button>
                <div class="dropdown-icon-btn-options">
                    <div class="dropdown-icon-btn-option"><i class="ph ph-pencil"></i>Editar</div>
                    <div class="dropdown-icon-btn-option"><i class="ph ph-trash"></i>Eliminar</div>
                </div>
            </div>
        </div>
    </section>
</section>
</section>
`;

const htmlMisPedidos = `
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

                <section class="orders-list">
                    <div class="order-card">
                        <div class="order-card-main">
                            <div class="order-card-left">
                                <div class="order-image-container">
                                    <img src="Images/Products/conjunto-frigorificos-plata-realistas-varios-tamanos-aislado-blanco.png"
                                        alt="Heladera No Frost" class="order-card-image">
                                </div>
                                <div class="order-info">
                                    <h3>Heladera No Frost</h3>
                                    <p>15 Mayo 2024 &bull; Pedido #EI-2024-1003</p>
                                </div>
                            </div>
                            <div class="order-card-right">
                                <span class="order-price">$899.999</span>
                                <button class="btn-details">Ver detalles</button>
                                <i class="ph ph-caret-right right-arrow-icon"></i>
                            </div>
                        </div>
                        <div class="order-card-footer">
                            <div class="delivery-status">
                                <i class="ph ph-truck"></i>
                                <span>Entregado el 17 Mayo 2024</span>
                            </div>
                            <div class="product-count">
                                <i class="ph ph-package"></i>
                                <span>1 producto</span>
                            </div>
                        </div>
                    </div>

                    <div class="order-card">
                        <div class="order-card-main">
                            <div class="order-card-left">
                                <div class="order-image-container">
                                    <img src="Images/Products/conjunto-frigorificos-plata-realistas-varios-tamanos-aislado-blanco.png"
                                        alt="Smart TV 55&quot; 4K" class="order-card-image">
                                </div>
                                <div class="order-info">
                                    <h3>Smart TV 55" 4K</h3>
                                    <p>10 Mayo 2024 &bull; Pedido #EI-2024-1002</p>
                                </div>
                            </div>
                            <div class="order-card-right">
                                <span class="order-price">$549.999</span>
                                <button class="btn-details">Ver detalles</button>
                                <i class="ph ph-caret-right right-arrow-icon"></i>
                            </div>
                        </div>
                        <div class="order-card-footer">
                            <div class="delivery-status text-blue">
                                <i class="ph ph-truck"></i>
                                <span>En camino &bull; Entrega estimada: 13 Mayo 2024</span>
                            </div>
                            <div class="product-count">
                                <i class="ph ph-package"></i>
                                <span>1 producto</span>
                            </div>
                        </div>
                    </div>

                    <div class="order-card">
                        <div class="order-card-main">
                            <div class="order-card-left">
                                <div class="order-image-container">
                                    <img src="Images/Products/conjunto-frigorificos-plata-realistas-varios-tamanos-aislado-blanco.png"
                                        alt="Auriculares Inalámbricos" class="order-card-image">
                                </div>
                                <div class="order-info">
                                    <h3>Auriculares Inalámbricos</h3>
                                    <p>5 Mayo 2024 &bull; Pedido #EI-2024-1001</p>
                                </div>
                            </div>
                            <div class="order-card-right">
                                <span class="order-price">$89.999</span>
                                <button class="btn-details">Ver detalles</button>
                                <i class="ph ph-caret-right right-arrow-icon"></i>
                            </div>
                        </div>
                        <div class="order-card-footer">
                            <div class="delivery-status text-grey">
                                <i class="ph ph-clipboard-text"></i>
                                <span>En preparacion &bull; Entrega estimada: 11 Mayo 2024</span>
                            </div>
                            <div class="product-count">
                                <i class="ph ph-package"></i>
                                <span>1 producto</span>
                            </div>
                        </div>
                    </div>
                </section>

                <nav class="pagination" aria-label="Paginación de pedidos">
                    <button class="page-btn"><i class="ph ph-caret-left pagination-arrow"></i></button>
                    <button class="page-btn active">1</button>
                    <button class="page-btn">2</button>
                    <button class="page-btn"><i class="ph ph-caret-right pagination-arrow"></i></button>
                </nav>

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

const htmlDirecciones = `
            <section class="addreses-section">
                <section class="saved-addresses-list">
                    <div class="saved-address-card">
                        <div class="saved-address-card-content">
                            <div class="saved-address-icon-container">
                                <i class="ph ph-house-line saved-address-icon"></i>
                            </div>
                            <address class="saved-address-details">
                                <div id="main-address">
                                    <h4>Casa</h4>
                                    <div id="main-address-badge">
                                        <span>Principal</span>
                                    </div>
                                </div>
                                <span>Calle Falsa 123</span>
                                <span>1234567890</span>
                            </address>
                        </div>

                        <div class="saved-address-card-buttons">
                            <button class="edit-addres-btn"><i class="ph ph-pencil"></i>Editar</button>
                            <button class="delete-addres-btn"><i class="ph ph-trash"></i>Eliminar</button>
                        </div>
                    </div>

                    <div class="saved-address-card">
                        <div class="saved-address-card-content">
                            <div class="saved-address-icon-container">
                                <i class="ph ph-building-office saved-address-icon"></i>
                            </div>
                            <address class="saved-address-details">
                                <h4>Trabajo</h4>
                                <span>Calle Falsa 123</span>
                                <span>1234567890</span>
                            </address>
                        </div>

                        <div class="saved-address-card-buttons">
                            <button class="edit-addres-btn"><i class="ph ph-pencil"></i>Editar</button>
                            <button class="delete-addres-btn"><i class="ph ph-trash"></i>Eliminar</button>
                        </div>
                    </div>
                </section>


                <button id="add-new-address-btn"><i class="ph ph-plus-circle"></i>Agregar nueva dirección de
                    envío</button>

            </section>
`;

const htmlMetodosPago = `
            <section class="payment-methods-section">
                <div class="saved-payment-methods-list">
                    <div class="saved-payment-method-card">
                        <div class="card-left">
                            <div class="payment-method-icon-container">
                                <img src="Images/Payment-methods/verified-by-visa-logo-png-0.png" alt="" class="payment-method-icon-img">
                            </div>
                            <div class="saved-payment-method-details">
                                <div class="main-payment-method">
                                    <h4>Visa terminada en 3456</h4>
                                    <div class="main-badge">
                                        <span>Predeterminado</span>
                                    </div>
                                </div>
                                <span>Vence: 12/28</span>
                            </div>
                        </div>



                        <div class="dropdown-icon-btn-container">
                            <button class="dropdown-icon-btn"><i class="ph ph-dots-three-vertical"></i></button>
                            <div class="dropdown-icon-btn-options">
                                <div class="dropdown-icon-btn-option"><i class="ph ph-pencil"></i>Editar</div>
                                <div class="dropdown-icon-btn-option"><i class="ph ph-trash"></i>Eliminar</div>
                            </div>
                        </div>
                    </div>

                    <div class="saved-payment-method-card">
                        <div class="card-left">
                            <div class="payment-method-icon-container">
                                <img src="Images/Payment-methods/Mastercard-Logo-2016-2020-700x394.png" alt="" class="payment-method-icon-img">
                            </div>
                            <div class="saved-payment-method-details">
                                <h4>Mastercard terminada en 6589</h4>
                                <span>Vence: 06/27</span>
                            </div>
                        </div>

                        <div class="dropdown-icon-btn-container">
                            <button class="dropdown-icon-btn"><i class="ph ph-dots-three-vertical"></i></button>
                            <div class="dropdown-icon-btn-options">
                                <div class="dropdown-icon-btn-option"><i class="ph ph-pencil"></i>Editar</div>
                                <div class="dropdown-icon-btn-option"><i class="ph ph-trash"></i>Eliminar</div>
                            </div>
                        </div>


                    </div>

                    <div class="saved-payment-method-card">
                        <div class="card-left">
                            <div class="payment-method-icon-container">
                                <img src="Images/Payment-methods/free-payment-icon-svg-download-png-51314.png" alt="" class="payment-method-icon-img">
                            </div>
                            <div class="saved-payment-method-details">
                                <h4>American Express terminada en 2311</h4>
                                <span>Vence: 02/29</span>
                            </div>
                        </div>

                        <div class="dropdown-icon-btn-container">
                            <button class="dropdown-icon-btn"><i class="ph ph-dots-three-vertical"></i></button>
                            <div class="dropdown-icon-btn-options">
                                <div class="dropdown-icon-btn-option"><i class="ph ph-pencil"></i>Editar</div>
                                <div class="dropdown-icon-btn-option"><i class="ph ph-trash"></i>Eliminar</div>
                            </div>
                        </div>
                    </div>

                    <div class="saved-payment-method-card">
                        <div class="card-left">
                            <div class="payment-method-icon-container">
                                <img src="Images/Payment-methods/free-mercado-pago-icon-svg-download-png-14549373.png" alt=""
                                    class="payment-method-icon-img">
                            </div>
                            <div class="saved-payment-method-details">
                                <h4>Mercado Pago</h4>
                                <span>Cuenta vinculada</span>
                            </div>
                        </div>

                        <div class="dropdown-icon-btn-container">
                            <button class="dropdown-icon-btn"><i class="ph ph-dots-three-vertical"></i></button>
                            <div class="dropdown-icon-btn-options">
                                <div class="dropdown-icon-btn-option"><i class="ph ph-pencil"></i>Editar</div>
                                <div class="dropdown-icon-btn-option"><i class="ph ph-trash"></i>Eliminar</div>
                            </div>
                        </div>
                    </div>
                </div>

                <button id="add-new-payment-method-btn"><i class="ph ph-plus-circle"></i>Agregar nuevo método de pago</button>

            </section>
`;

asideOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        const optionName = e.currentTarget.textContent.trim();

        // Remover la clase activa de todas las opciones
        asideOptions.forEach(opt => opt.classList.remove('active'));

        // Agregar la clase activa a la opción clickeada
        e.currentTarget.classList.add('active');

        renderDashboardSection(optionName);
    });
});


renderDashboardSection('Resumen');

const logoutBtn = document.querySelector('#aside-logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        console.log('Cerrar sesión');
        // TODO: Hacer lógica para cerrar sesión
    });
}

function renderDashboardSection(section) {

    switch (section) {
        case 'Resumen':
            dashboardContainer.innerHTML = htmlResumen;
            asideOptions[0].classList.add('active');
            break;
        case 'Mis pedidos':
            dashboardContainer.innerHTML = htmlMisPedidos;
            asideOptions[1].classList.add('active');
            break;
        case 'Direcciones':
            dashboardContainer.innerHTML = htmlDirecciones;
            asideOptions[2].classList.add('active');
            break;
        case 'Métodos de pago':
            dashboardContainer.innerHTML = htmlMetodosPago;
            asideOptions[3].classList.add('active');
            break;
        default:
            dashboardContainer.innerHTML = `<h2>Sección "${section}" en construcción...</h2>`;
    }
}