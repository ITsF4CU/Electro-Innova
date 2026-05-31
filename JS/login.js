import { registerFormManager } from "./register/register-form-manager.js";
import { loginFormManager } from "./login/login-form-manager.js";

const create = document.querySelector('#ir-a-registro');
const loginButton = document.querySelector('#ir-a-inicio-sesion')
const login = document.querySelector('.login-window')
const registerSection = document.querySelector('.login-window.login-2')

create.addEventListener('click', (e) => {
    e.preventDefault();

    login.style.display = 'none';
    registerSection.classList.add('active')
});

loginButton.addEventListener('click', (e) => {
    e.preventDefault();

    registerSection.classList.remove('active');
    login.style.display = 'flex'
})

// Inicializa el manager de registro
registerFormManager.init();

// Inicializa el manager de inicio de sesion
loginFormManager.init();