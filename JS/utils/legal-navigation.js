document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.querySelector("#btn-back");
    
    if (!backButton) return;

    const urlParams = new URLSearchParams(window.location.search);
    const fromParam = urlParams.get("from");

    if (fromParam === "auth") {
        backButton.innerText = "Volver a Iniciar Sesión";
        backButton.href = "login.html"; 
    } else {
        backButton.innerText = "Volver al Inicio";
        backButton.href = "index.html";
    }
});