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
        // Se obtienen todos los usuarios registrados
        const users = this.getUsers();

        // Se busca el usuario por su id
        const user = users.find(u => u.id === id);

        // Si encuentra el usuario, lo retorna, si no, retorna undefined
        return user;
    }

    // Funcion que agrega un nuevo usuario
    addUser(user) {
        // Recibe un objeto con el email, nombre, apellido y contraseña.
        // No recibe el id ya que se le asignara uno automaticamente.

        // Se obtienen los datos del storage
        const data = this.#getUserData();

        // Si el usuario no existe, se agrega a la lista asignandole el siguiente id
        user.id = data.lastId;
        data.list.push(user);

        // Se incrementa el lastId
        data.lastId += 1;

        // Se actualiza el storage
        this.#setUserData(data);
    }

    // Funcion que elimina un usuario por su id
    removeUser(id) {

        // Se obtienen los datos del storage
        const data = this.#getUserData();

        // Se busca si existe un usuario que coincide con el id recibido por parametros
        const userExists = data.list.some(u => u.id === id);

        // Si encuentra el usuario, se elimina
        if (userExists) {
            data.list = data.list.filter(u => u.id !== id);

            // Se actualiza el storage
            this.#setUserData(data);
        }
    }

    // Funcion que actualiza los datos de un usuario
    updateUser(user) {
        // Recibe un objeto con el id, email, nombre, apellido y contraseña.

        // Se obtienen los datos del storage
        let data = this.#getUserData();

        // Se busca el indice del usuario que coincide con el id del usuario recibido por parametros
        const userIndex = data.list.findIndex(u => u.id === user.id);

        // Si encuentra el usuario, se actualiza con los nuevos datos
        if (userIndex >= 0) {
            data.list[userIndex] = user;
            this.#setUserData(data);
        }
    }
}

export const userStorageService = new UserStorageService();