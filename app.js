import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhW7YX_tbruVyN95_ZimA3qhB_x8zmFmk",
  authDomain: "my-site-345bf.firebaseapp.com",
  projectId: "my-site-345bf",
  storageBucket: "my-site-345bf.firebasestorage.app",
  messagingSenderId: "361316233879",
  appId: "1:361316233879:web:aff78b86d8d7d9884d2fd2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkFirebase() {
    try {
        console.log("1. Firebase инициализирован. Пробуем записать данные...");

        await addDoc(collection(db, "test"), {
            message: "Привет, мир!",
            timestamp: new Date()
        });
      
        console.log(" 2. УСПЕХ! Firebase подключен, база данных работает.");
        
    } catch (error) {
        console.error(" ОШИБКА Firebase не подключен.");
        console.error(error);
    }
}

checkFirebase();
