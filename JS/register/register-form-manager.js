import { userStorageService } from "../services/user_storage_service.js";
import { sessionStorageService } from "../services/session_storage_service.js";

class RegisterFormManager {
    init() {
        const registerForm = document.querySelector("#register-form");

        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = new FormData(registerForm);
            const email = formData.get("email");
            const name = formData.get("name");
            const secondName = formData.get("secondName");
            const password = formData.get("password");
            const confirmPassword = formData.get("confirm-password");

            this.#register(email, name, secondName, password, confirmPassword);
        })
    }

    // Funcion privada para registrar el usuario
    #register(email, name, secondName, password, confirmPassword) {

        // Verificacion de que las contraseñas sean iguales
        if (password !== confirmPassword) {
            // TODO: Mostrar alerta bien hecha de que las contraseñas no coinciden
            alert("Las contraseñas no coinciden");
            return;
        }

        // Obtencion de los usuarios
        const users = userStorageService.getUsers();

        // Verificacion de que el usuario no exista
        const userIndex = users.findIndex(u => u.email === email);

        // Si el usuario existe, se muestra una alerta
        if (userIndex >= 0) {
            // TODO: Mostrar alerta bien hecha de que el usuario ya existe
            alert("El usuario ya existe");
            return;
        }

        // Creacion del usuario
        const user = { id: undefined, email: email, name: name, secondName: secondName, password: password };

        // Se agrega el usuario en el storage
        userStorageService.addUser(user);

        // Se inicia sesion en el usuario registrado
        sessionStorageService.login(email, password);

        // Redireccion a la pagina de inicio
        window.location.href = "index.html";
    }
}

export const registerFormManager = new RegisterFormManager();
