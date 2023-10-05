const qr = document.getElementById('qr');

qr.addEventListener('click', () => {
    window.location.href = './make-qr.html'
})

const database = document.getElementById('database');

database.addEventListener('click', () => {
    window.location.href = './database-input.html'
})

const backLogin = document.getElementById('backLogin');

backLogin.addEventListener('click', () => {
    localStorage.removeItem('user')
    window.location.href = '../index.html'
})