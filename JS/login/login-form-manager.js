import { sessionStorageService } from "../services/session_storage_service.js";

class LoginFormManager {
    init() {
        const loginForm = document.querySelector("#login-form");

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = new FormData(loginForm);
            const email = formData.get("email");
            const password = formData.get("password");

            const loginSuccess = sessionStorageService.login(email, password);

            if (loginSuccess) {
                window.location.href = "main.html";
            } else {
                // TODO: Crear una alerta o mensaje para mostrar error
                alert("Usuario o contraseña incorrectos.");
            }
        })
    }
}

export const loginFormManager = new LoginFormManager(); 