export const getUserLocal = () => {
    const user = localStorage.getItem('user');
    if (user) {
        window.location.href = './pages/home.html'
    } else {
        console.log('work')
    }
}

