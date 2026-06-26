import { renderizarCARDS } from "./renders/render-products-card.js";

const contenedorFavs = document.querySelector('.favoritos');

function cargarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (favoritos.length === 0) {
        contenedorFavs.innerHTML = `
            <div class="fav">
                <h2>Tus productos favoritos</h2>
                <p style="font-family: 'Montserrat'; margin-top: 20px;">No tenés productos guardados como favoritos todavía.</p>
            </div>`;
        return;
    }

    const grid = document.createElement('div');
    grid.style.display = "flex";
    grid.style.gap = "20px";
    grid.style.flexWrap = "wrap";
    grid.style.padding = "20px";

    favoritos.forEach(prod => {
        const tarjeta = renderizarCARDS(prod);
        grid.appendChild(tarjeta);
    });

    contenedorFavs.appendChild(grid);
}

cargarFavoritos();