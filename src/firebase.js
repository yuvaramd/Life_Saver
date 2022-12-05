import firebase from "firebase";
// import * as firebase from "firebase/app"
// // import * as firebaseA from "firebase/auth"

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZeF3fxOd_dAJvD6AKUdUBq7y2Ch0l9g4",
  authDomain: "lifestream-bde39.firebaseapp.com",
  projectId: "lifestream-bde39",
  storageBucket: "lifestream-bde39.appspot.com",
  messagingSenderId: "145963300425",
  appId: "1:145963300425:web:139d69d3b2a94a3abbb198",
  measurementId: "G-RBE1TY5PP0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const functions = firebaseApp.functions();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth,functions};
