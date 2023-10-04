import { getTeam } from "./api.js";

const getUsers = async () => {
    try {
        const querySnapshot = await getTeam();
        const users = [];
        querySnapshot.forEach((doc) => {
            const userData = doc.data();
            users.push(userData);
        });
        return users;
    } catch (error) {
        console.error("Error obteniendo usuarios: ", error);
        throw error; // Lanza el error para manejarlo en otro lugar si es necesario
    }
}

export const login = async (username, password) => {
    const users = await getUsers();
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
        // Usuario autenticado exitosamente
        console.log("Inicio de sesión exitoso");
        window.location.href = './pages/home.html';
    } else {
        console.log("Credenciales incorrectas");
        // Puedes mostrar un mensaje de error al usuario
    }
}

