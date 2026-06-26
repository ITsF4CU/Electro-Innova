import { createProducts } from '../products-database/products-db.js';
import { activarBotonesCarrito } from '../utils/cart-button.js';
import { sessionStorageService } from '../services/session_storage_service.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const producto = createProducts.find(p => p.id == productId);

    if (!producto) {
        console.error("No se encontró el producto con ID: " + productId);
        return;
    }


    const detailContainer = document.querySelector('.product-detail-container');
    if (detailContainer) {
        detailContainer.innerHTML = `
            <div class="product-image-desc">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="description">
                <div class="product-title">
                    <h2>${producto.nombre}</h2>
                </div>
                
                <div class="product-rating" style="display: flex; align-items: center; gap: 8px; margin: 10px 0;">
                    <div id="general-stars-render" style="color: #ffb300; font-size: 1.2rem; letter-spacing: 2px;"></div>
                    <span id="general-rating-text" style="font-weight: 600; color: #475569; font-size: 0.95rem; font-family: 'Montserrat';"></span>
                </div>

                <div class="product-price">
                    <h3>$${producto.precio.toLocaleString('es-AR')}</h3>
                    <p class="pCuotas-detail" style="color: #64748b; font-size: 0.95rem; margin: 5px 0;">
                        <i class="ph ph-credit-card"></i> ${producto.cuotas || '3 cuotas sin interés'}
                    </p>
                    <p class="pSend-detail" style="color: #00b074; font-weight: 600; font-size: 0.95rem;">
                        <i class="ph ph-truck"></i> ${producto.envio || 'Envío normal'}
                    </p>
                </div>
                <div class="product-description" style="margin-top: 15px; color: #475569; line-height: 1.6;">
                    <p>${producto.descripcion || 'Sin descripción disponible para este producto.'}</p>
                </div>
                <div class="add-to-cart" style="margin-top: 20px;">
                    <button data-id="${producto.id}">Añadir al carrito</button>
                </div>
            </div>
        `;
        activarBotonesCarrito(createProducts);
    }


    let listaComentarios = [
        { usuario: "Carlos de Monteros", calificacion: 5, texto: "Excelente calidad de materiales, llegó rapidísimo a casa. Súper recomendado." },
        { usuario: "Marta Gómez", calificacion: 4, texto: "Muy buena relación precio calidad. Cumple perfectamente con lo que promete." }
    ];

    const commentsListContainer = document.querySelector('.comments-list');

    const commentForm = document.getElementById('new-comment-form');

    function actualizarPromedioGeneral() {
    
        const sumaTotal = listaComentarios.reduce((acumulador, com) => acumulador + com.calificacion, 0);
        const promedio = (sumaTotal / listaComentarios.length).toFixed(1);
        
    
        const estrellasEnteras = Math.round(promedio);
        const dibujoEstrellasTexto = "★".repeat(estrellasEnteras) + "☆".repeat(5 - estrellasEnteras);
        
    
        const starsRenderTop = document.getElementById('general-stars-render');
        const ratingTextTop = document.getElementById('general-rating-text');
        if (starsRenderTop && ratingTextTop) {
            starsRenderTop.innerText = dibujoEstrellasTexto;
            ratingTextTop.innerText = `${promedio} (${listaComentarios.length} opiniones)`;
        }
        
        
        let dibujoEstrellasIconos = "";
        for (let i = 1; i <= estrellasEnteras; i++) {
            dibujoEstrellasIconos += `<i class="ph-fill ph-star" style="color: #ffb300; font-size: 1.4rem;"></i>`;
        }
        for (let i = estrellasEnteras + 1; i <= 5; i++) {
            dibujoEstrellasIconos += `<i class="ph ph-star" style="color: #cbd5e1; font-size: 1.4rem;"></i>`;
        }
        
        
        const ratingNumberBottom = document.getElementById('comments-rating-number');
        const starsRenderBottom = document.getElementById('comments-stars-render');
        const countTextBottom = document.getElementById('comments-count-text');
        if (ratingNumberBottom) ratingNumberBottom.innerText = promedio;
        if (starsRenderBottom) starsRenderBottom.innerHTML = dibujoEstrellasIconos;
        if (countTextBottom) countTextBottom.innerText = `${listaComentarios.length} opiniones`;
    }

    function renderizarComentarios() {
        if (!commentsListContainer) return;
        commentsListContainer.innerHTML = "";

        listaComentarios.forEach(com => {

            let estrellasHTML = "";
            

            for (let i = 1; i <= com.calificacion; i++) {
                estrellasHTML += `<i class="ph-fill ph-star" style="color: #ffb300; font-size: 1.1rem;"></i>`;
            }

            for (let i = com.calificacion + 1; i <= 5; i++) {
                estrellasHTML += `<i class="ph ph-star" style="color: #cbd5e1; font-size: 1.1rem;"></i>`;
            }
            
            const commentItem = document.createElement('div');
            commentItem.classList.add('comment-item');
            commentItem.innerHTML = `
                <div class="comment-meta" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <h5 style="font-family:'Montserrat'; font-weight:600; color:#334155; margin:0;">${com.usuario}</h5>
                    <div class="comment-stars">${estrellasHTML}</div>
                </div>
                <p style="font-family:'Roboto'; color:#475569; line-height:1.5; font-size:0.95rem; margin:0;">${com.texto}</p>
            `;
            commentsListContainer.appendChild(commentItem);
        });


        actualizarPromedioGeneral();
    }


    const nameInput = document.getElementById('comment-user');
    

    const currentUser = sessionStorageService.getCurrentUser();


    if (currentUser !== undefined) {
        if (nameInput) {
            nameInput.value = currentUser.name;
            nameInput.readOnly = true;
            nameInput.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
            nameInput.style.cursor = "not-allowed";
        }
    }

    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const userCheck = sessionStorageService.getCurrentUser();


            if (userCheck === undefined) {
                alert("Para poder dejar una reseña sobre el producto, primero debes iniciar sesión.");
                window.location.href = "login.html";
                return;
            }


            const inputUser = nameInput.value.trim();
            const selectRating = Number(document.getElementById('comment-rating').value);
            const inputBody = document.getElementById('comment-body').value.trim();

            const nuevoComentario = {
                usuario: inputUser,
                calificacion: selectRating,
                texto: inputBody
            };

            listaComentarios.unshift(nuevoComentario);
            renderizarComentarios();
            commentForm.reset();

            if (nameInput) {
                nameInput.value = userCheck.name;
            }
        });
    }

    renderizarComentarios();


    const tabs = document.querySelectorAll('.tab-btn');
    const contentContainer = document.getElementById('tab-dynamic-content');

    
    const specs = producto.especificaciones || {};

    
    const etiquetasSpecs = {
        tipo: "Tipo de Producto",
        material: "Material Exterior",
        hornallas: "Cantidad de Hornallas",
        conexion: "Tipo de Conexión",
        dimensiones: "Dimensiones (Al x An x Prof)",
        encendido: "Encendido Electrónico",
        capacidad: "Capacidad",
        garantia: "Plazo de Garantía",
        eficiencia: "Eficiencia Energética",
        tipoCarga: "Tipo de Carga",
        velocidadCentrifugado: "Velocidad de Centrifugado",
        noFrost: "Tecnología No Frost",
        sistema: "Sistema de Enfriamiento",
        programas: "Cantidad de Programas",
        autonomia: "Autonomía de Batería",
        microfono: "Micrófono",
        copas: "Diseño de Copas",
        compatibilidad: "Compatibilidad",
        pantalla: "Pantalla",
        procesador: "Procesador"
    };

    
    function generarFilasSpecs(objetoSpecs) {
        
        if (Object.keys(objetoSpecs).length === 0) {
            return `<tr><td colspan="2" style="text-align:center; color:#64748b;">No hay especificaciones técnicas disponibles para este producto.</td></tr>`;
        }

        let filasHTML = "";
        
        
        Object.keys(objetoSpecs).forEach(clave => {
            
            if (clave === "garantia") return; 

            
            const nombreLimpio = etiquetasSpecs[clave] || clave.charAt(0).toUpperCase() + clave.slice(1);
            const valor = objetoSpecs[clave];

            filasHTML += `<tr><td>${nombreLimpio}</td><td>${valor}</td></tr>`;
        });

        return filasHTML;
    }


    const todasLasFilas = generarFilasSpecs(specs);

    const tabData = {
        detalle: `
            <table class="specs-table">
                ${todasLasFilas}
            </table>`,
        especificaciones: `
            <table class="specs-table">
                <tr><td>Eficiencia Energética / Rendimiento</td><td>Clase A (Ahorro Inteligente)</td></tr>
                <tr><td>Control de Calidad</td><td>Aprobado bajo normas de seguridad industrial</td></tr>
                <tr><td>Origen</td><td>Industria Argentina / Importado Oficial</td></tr>
            </table>`,
        garantia: `
            <table class="specs-table">
                <tr><td>Plazo de Garantía</td><td>${specs.garantia || '12 Meses'}</td></tr>
                <tr><td>Cobertura</td><td>Fallas técnicas de fabricación y componentes mecánicos o de hardware.</td></tr>
                <tr><td>Soporte Técnico</td><td>Atención prioritaria a través de la Red Oficial de Electro Innova.</td></tr>
            </table>`
    };

    if (contentContainer) {
        contentContainer.innerHTML = tabData['detalle'];
    }


    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const targetTab = tab.dataset.tab;
            if (contentContainer) {
                contentContainer.innerHTML = tabData[targetTab];
            }
        });
    });
});