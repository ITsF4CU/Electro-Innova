import { registerFormManager } from "./register/register-form-manager.js";
import { loginFormManager } from "./login/login-form-manager.js";

const create = document.querySelector('#ir-a-registro');
const loginButton = document.querySelector('#ir-a-inicio-sesion');
const loginWindow = document.querySelector('.login-window');
const registerSection = document.querySelector('.login-window.login-2');

if (create && loginButton) {
    create.addEventListener('click', (e) => {
        e.preventDefault();
        loginWindow.style.display = 'none';
        registerSection.classList.add('active');
    });

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        registerSection.classList.remove('active');
        loginWindow.style.display = 'flex';
    });
}

registerFormManager.init();
loginFormManager.init();