import { userStorageService } from "../services/user_storage_service.js";
import { sessionStorageService } from "../services/session_storage_service.js";

class RegisterFormManager {
    init() {
        const registerForm = document.querySelector("#register-form");

        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const termsCheckbox = document.querySelector("#terms-accept");
            if (!termsCheckbox || !termsCheckbox.checked) {
                alert("Debes aceptar los Términos y Condiciones y la Política de Privacidad para registrarte.");
                return;
            }

            const formData = new FormData(registerForm);
            const email = formData.get("email");
            const name = formData.get("name");
            const secondName = formData.get("secondName");
            const password = formData.get("password");
            const confirmPassword = formData.get("confirm-password");

            this.#register(email, name, secondName, password, confirmPassword);
        })
    }


    #register(email, name, secondName, password, confirmPassword) {

        
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const users = userStorageService.getUsers();


        const userIndex = users.findIndex(u => u.email === email);


        if (userIndex >= 0) {
            alert("El usuario ya existe");
            return;
        }


        const user = { id: undefined, email: email, name: name, secondName: secondName, password: password };
        userStorageService.addUser(user);
        sessionStorageService.login(email, password);
        window.location.href = "index.html";
    }
}

export const registerFormManager = new RegisterFormManager();
