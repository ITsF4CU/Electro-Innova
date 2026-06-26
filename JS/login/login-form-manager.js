import { sessionStorageService } from "../services/session_storage_service.js";

class LoginFormManager {
    init() {
        const loginForm = document.querySelector("#login-form");

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = new FormData(loginForm);
            const email = formData.get("email");
            const password = formData.get("password");

            const loginStatus = sessionStorageService.login(email, password);

            if (loginStatus.success) {
                window.location.href = "index.html";
            } else {
                
                alert(loginStatus.message);
            }
        })
    }
}

export const loginFormManager = new LoginFormManager(); 
