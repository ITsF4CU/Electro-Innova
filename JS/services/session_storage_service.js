import { userStorageService } from "./user_storage_service.js";


class SessionStorageService {
    #userStorageService;

    constructor(userStorageService) {
        this.#userStorageService = userStorageService;
    }

    #getSessionData() {
        const data = localStorage.getItem("sessionData");

        return JSON.parse(data) ?? { loggedInUserId: undefined };
    }

    #setSessionData(data) {
        const dataToSave = JSON.stringify(data);
        localStorage.setItem("sessionData", dataToSave);
    }

    #setCurrentUser(userId) {
        const sessionData = this.#getSessionData();
        sessionData.loggedInUserId = userId;
        this.#setSessionData(sessionData);
    }

    // Funcion para iniciar sesion
    login(email, password) {
        const users = this.#userStorageService.getUsers();

        const userIndex = users.findIndex(u => u.email === email);

        if (userIndex >= 0) {

            if (users[userIndex].password === password) {

                const userId = users[userIndex].id;
                this.#setCurrentUser(userId);

                return { success: true, message: "Login exitoso." };
            }

            return { success: false, message: "Contraseña incorrecta." };
        }
        return { success: false, message: "El correo no existe." };
    }


    logout() {
        this.#setCurrentUser(undefined);
    }

    getCurrentUser() {
        const data = this.#getSessionData();

        const userId = data.loggedInUserId;

        return this.#userStorageService.getUserById(userId);
    }
};

export const sessionStorageService = new SessionStorageService(userStorageService);