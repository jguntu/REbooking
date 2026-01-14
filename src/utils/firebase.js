// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB844wuFu2A4QBEZ77iHoNWHyjIYZTYfFI",
    authDomain: "re-prime-dev.firebaseapp.com",
    databaseURL: "https://re-prime-dev.firebaseio.com",
    projectId: "re-prime-dev",
    storageBucket: "re-prime-dev.appspot.com",
    messagingSenderId: "119002103004",
    appId: "1:119002103004:web:9100fd395bb04f49c28819",
    measurementId: "G-561VWB9429",
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);