import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDwkWOdH-1NQSAg2KP40mg4k5BvHq9Cglk",
    authDomain: "proyectofinal-ngv.firebaseapp.com",
    projectId: "proyectofinal-ngv",
    storageBucket: "proyectofinal-ngv.firebasestorage.app",
    messagingSenderId: "814088789066",
    appId: "1:814088789066:web:ed2e364dab3a786b759ab3"
  };

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)