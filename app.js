console.log("Файл app.js успешно подключен!");
const firebaseConfig = {
  apiKey: "ТУТ_БУДУТ_ВАШИ_КЛЮЧИ",
  authDomain: "ваш-проект.firebaseapp.com",
  projectId: "ваш-проект",

};
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456...",
  appId: "1:123456:web:abc..."
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); 

db.collection("test").add({
    message: "Привет из GitHub Pages!",
    timestamp: new Date()
})
.then(() => {
    console.log(" Firebase успешно подключен данные записались в базу.");
    alert("Успех! Firebase работает.");
})
.catch((error) => {
    console.error(" Ошибка подключения к Firebase:", error);
    alert("Ошибка! Проверьте консоль (F12).");
});
