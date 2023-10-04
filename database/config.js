import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD5G1jTiewun6vfDJ7ZutFUT099Vw2_06E",
    authDomain: "classcontrol-7746c.firebaseapp.com",
    projectId: "classcontrol-7746c",
    storageBucket: "classcontrol-7746c.appspot.com",
    messagingSenderId: "619842833283",
    appId: "1:619842833283:web:7ddbd79d49ffbba38c04b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

