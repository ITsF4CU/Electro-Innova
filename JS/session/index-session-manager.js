import { sessionStorageService } from "../services/session_storage_service.js";

class IndexSessionManager {
    init() {
        const userBtn = document.querySelector("#user-btn");
        const currentUser = sessionStorageService.getCurrentUser();

        if (currentUser !== undefined) {
            userBtn.innerText = currentUser.name;
            userBtn.href = "#";
        } else {
            userBtn.innerText = "Iniciar Sesión";
            userBtn.href = "login.html";
        }
    }
}

export const indexSessionManager = new IndexSessionManager();