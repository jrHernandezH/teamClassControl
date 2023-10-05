import { login } from "./database/credentials.js";
import { getUserLocal } from "./routes/login.js";

const sign = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        await login(username, password);
    } catch (error) {
        document.getElementById('errorUser').innerHTML = error.message;
    }
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    sign();
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function () {
    getUserLocal();
});