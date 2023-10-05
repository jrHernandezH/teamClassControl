
const getUserLocal = () => {
    const user = localStorage.getItem('user');
    if (user) {
        console.log(user);
    } else {
        window.location.href = '../index.html'
    }
}

document.addEventListener('DOMContentLoaded', function () {
    getUserLocal();
});