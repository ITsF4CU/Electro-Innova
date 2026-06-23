// Clase que se encarga de guardar, obtener, modificar y eliminar los datos de los usuarios registrados
class UserStorageService {

    // Funcion privada para obtener los datos del storage
    #getUserData() {
        const data = localStorage.getItem("users");

        // Si no hay datos retorna un objeto con lastId en 1 y una lista vacia
        return JSON.parse(data) ?? { lastId: 1, list: [] };
    }

    // Funcion privada para guardar los datos en el storage
    #setUserData(data) {
        // Se convierte el objeto a JSON
        const dataToSave = JSON.stringify(data);

        // Se guarda en el storage
        localStorage.setItem("users", dataToSave);
    }

    // Funcion que retorna la lista de todos los usuarios
    getUsers() { return this.#getUserData().list; }

    // Funcion que retorna un usuario por su id
    getUserById(id) {

        const users = this.getUsers();

        const user = users.find(u => u.id === id);

        return user;
    }

    addUser(user) {
        const data = this.#getUserData();

        user.id = data.lastId;
        data.list.push(user);


        data.lastId += 1;
        this.#setUserData(data);
    }

    // Funcion que elimina un usuario por su id
    removeUser(id) {
        const data = this.#getUserData();

        const userExists = data.list.some(u => u.id === id);

        if (userExists) {
            data.list = data.list.filter(u => u.id !== id);

            // Se actualiza el storage
            this.#setUserData(data);
        }
    }

    // Funcion que actualiza los datos de un usuario
    updateUser(user) {
        const data = this.#getUserData();

        const userIndex = data.list.findIndex(u => u.id === user.id);

        if (userIndex >= 0) {
            data.list[userIndex] = user;
            this.#setUserData(data);
        }
    }
}

export const userStorageService = new UserStorageService();