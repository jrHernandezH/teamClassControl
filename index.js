import { login } from "./database/credentials.js";


const sign = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    login(username, password)
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    // Obtén los valores de los inputs
    sign();
    // Evita que el formulario se envíe
    event.preventDefault();
});

