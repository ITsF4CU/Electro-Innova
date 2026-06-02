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
                    <h5>Nombre del producto</h5>
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
                <div class="saved-address-details">
                    <div id="main-address">
                        <h5>Dirección 1</h5>
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
                <div class="saved-address-details">
                    <h5>Dirección 2</h5>
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
        default:
            dashboardContainer.innerHTML = `<h2>Sección "${section}" en construcción...</h2>`;
    }
}