import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjLJh0-Tt8lk7GhWzTMUApGMLRGz1QXs4",
  authDomain: "lifestream-donors.firebaseapp.com",
  projectId: "lifestream-donors",
  storageBucket: "lifestream-donors.appspot.com",
  messagingSenderId: "212716680417",
  appId: "1:212716680417:web:b3ce8e7d75f50efd19f3a0",
  measurementId: "G-3LZ6P2K5JP"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
