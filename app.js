const firebaseConfig = {
  apiKey: "ВАШ_API_KEY",
  authDomain: "ВАШ_ПРОЕКТ.firebaseapp.com",
  projectId: "ВАШ_ПРОЕКТ",
  storageBucket: "ВАШ_ПРОЕКТ.appspot.com",
  messagingSenderId: "ВАШ_MESSAGING_SENDER_ID",
  appId: "ВАШ_APP_ID"
};

let db;
const resultElement = document.getElementById('result');

try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    resultElement.textContent = "Firebase готов к работе";
} catch (error) {
    resultElement.textContent = "Ошибка при инициализации Firebase.";
}

document.getElementById('test-btn').addEventListener('click', async () => {
    resultElement.textContent = "Отправка данных в базу";

    try {
        await db.collection("test").add({
            message: "Привет из GitHub Pages!",
            timestamp: new Date()
        });

        resultElement.textContent = "УСПЕХ!";
        
    } catch (error) {
        resultElement.textContent = "ОШИБКА!";
        console.log("ошибки для разработчика:", error);
    }
});
