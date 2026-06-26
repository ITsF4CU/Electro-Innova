// Manejo del sistema de pestañas (Tabs)
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const contentContainer = document.getElementById('tab-dynamic-content');

    const tabData = {
        detalle: `
            <table class="specs-table">
                <tr><td>Tipo de Producto</td><td>Cocina de Alta Gama</td></tr>
                <tr><td>Material Exterior</td><td>Acero Inoxidable Esmerilado</td></tr>
                <tr><td>Cantidad de Hornallas</td><td>4 Quemadores de Aluminio</td></tr>
                <tr><td>Tipo de Conexión</td><td>Multigas (Gas Natural / Envasado)</td></tr>
                <tr><td>Dimensiones (Al x An x Prof)</td><td>85cm x 56cm x 60cm</td></tr>
            </table>`,
        especificaciones: `
            <table class="specs-table">
                <tr><td>Encendido Electrónico</td><td>Sí, a una mano en hornallas y horno</td></tr>
                <tr><td>Luz de Horno</td><td>Sí, lámpara tubular de alta resistencia</td></tr>
                <tr><td>Capacidad del Horno</td><td>68 Litros</td></tr>
                <tr><td>Eficiencia Energética</td><td>Clase A (Máximo ahorro inteligente)</td></tr>
                <tr><td>Válvula de Seguridad</td><td>Sí, con sistema de corte automático por falta de llama</td></tr>
            </table>`,
        garantia: `
            <table class="specs-table">
                <tr><td>Plazo de Garantía</td><td>12 Meses Oficial de Fábrica</td></tr>
                <tr><td>Cobertura</td><td>Fallas técnicas de fabricación y componentes de hardware interno</td></tr>
                <tr><td>Soporte Técnico</td><td>Atención Prioritaria a través de la red de Service Oficial Electro Innova</td></tr>
            </table>`
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {

            tabs.forEach(t => t.classList.remove('active'));
            
            tab.classList.add('active');
            
            const targetTab = tab.dataset.tab;
            
            contentContainer.innerHTML = tabData[targetTab];
        });
    });
});


function renderProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = createProducts.find(p => p.id == productId);

    if (!product) return;

    document.getElementById('detail-title').innerText = product.nombre;
    document.getElementById('detail-price').innerText = `$${product.precio.toLocaleString('es-AR')}`;
    document.getElementById('detail-desc').innerText = product.descripcion || "Sin descripción disponible.";

    const tabs = document.querySelectorAll('.tab-btn');
    const contentContainer = document.getElementById('tab-dynamic-content');


    const specs = product.especificaciones || {
        tipo: "Estándar", material: "No especificado", hornallas: "4", 
        conexion: "Multigas", dimensiones: "Estándar", encendido: "Manual", 
        capacidad: "Estándar", garantia: "12 Meses"
    };


    const tabData = {
        detalle: `
            <table class="specs-table">
                <tr><td>Tipo de Producto</td><td>${specs.tipo}</td></tr>
                <tr><td>Material Exterior</td><td>${specs.material}</td></tr>
                <tr><td>Cantidad de Hornallas</td><td>${specs.hornallas}</td></tr>
                <tr><td>Tipo de Conexión</td><td>${specs.conexion}</td></tr>
                <tr><td>Dimensiones (Al x An x Prof)</td><td>${specs.dimensiones}</td></tr>
            </table>`,
        especificaciones: `
            <table class="specs-table">
                <tr><td>Encendido Electrónico</td><td>${specs.encendido}</td></tr>
                <tr><td>Capacidad del Horno</td><td>${specs.capacidad}</td></tr>
                <tr><td>Eficiencia Energética</td><td>Clase A (Ahorro Inteligente)</td></tr>
                <tr><td>Válvula de Seguridad</td><td>Sí, con sistema de corte automático</td></tr>
            </table>`,
        garantia: `
            <table class="specs-table">
                <tr><td>Plazo de Garantía</td><td>${specs.garantia}</td></tr>
                <tr><td>Cobertura</td><td>Fallas técnicas de fabricación y componentes del hardware</td></tr>
                <tr><td>Soporte Técnico</td><td>Atención a través de la red Oficial Electro Innova</td></tr>
            </table>`
    };

    contentContainer.innerHTML = tabData['detalle'];

    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const targetTab = tab.dataset.tab;
            contentContainer.innerHTML = tabData[targetTab];
        });
    });
}