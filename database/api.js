import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { db } from "./config.js";



export const getTeam = () => {
    return getDocs(collection(db, "Team"));
}



