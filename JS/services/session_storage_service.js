import { userStorageService } from "./user_storage_service.js";

// Clase que permite gestionar la sesion del usuario
class SessionStorageService {
    #userStorageService;

    constructor(userStorageService) {
        this.#userStorageService = userStorageService;
    }

    // Funcion privada para obtener los datos de la sesion
    #getSessionData() {
        const data = localStorage.getItem("sessionData");

        // Retorna un objeto con los datos de la sesion
        // Si no hay datos, retorna un objeto con el id en undefined
        return JSON.parse(data) ?? { loggedInUserId: undefined };
    }

    // Funcion privada para guardar los datos de la sesion
    #setSessionData(data) {
        const dataToSave = JSON.stringify(data);
        localStorage.setItem("sessionData", dataToSave);
    }

    // Funcion privada para establecer el usuario actual
    #setCurrentUser(userId) {
        const sessionData = this.#getSessionData();
        sessionData.loggedInUserId = userId;
        this.#setSessionData(sessionData);
    }

    // Funcion para iniciar sesion
    login(email, password) {
        let users = this.#userStorageService.getUsers();

        // Se busca el indice del usuario en la lista de usuarios
        let userIndex = users.findIndex(u => u.password === password && u.email === email);

        // Si el usuario existe, se establece el usuario actual
        if (userIndex >= 0) {
            const userId = users[userIndex].id;
            this.#setCurrentUser(userId);

            // Retorna true si el login fue exitoso
            return true;
        }

        // Retorna false si el login no fue exitoso
        return false;
    }

    // Funcion para cerrar sesion
    logout() {
        this.#setCurrentUser(undefined);
    }

    // Funcion para obtener los datos del usuario actual
    getCurrentUser() {
        // Se obtienen los datos de la sesion
        const data = this.#getSessionData();

        // Se obtiene el id del usuario actual
        const userId = data.loggedInUserId;

        // Se retorna el usuario actual
        return this.#userStorageService.getUserById(userId);
    }
}

export const sessionStorageService = new SessionStorageService(userStorageService);