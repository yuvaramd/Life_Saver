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
  apiKey: "AIzaSyBxOuC7GWJF53gtxzbKBQtYfuWj29HZGMo",
  authDomain: "clone-6de1c.firebaseapp.com",
  projectId: "clone-6de1c",
  storageBucket: "clone-6de1c.appspot.com",
  messagingSenderId: "920605255241",
  appId: "1:920605255241:web:9d0ed3f4358eacef06c198",
  measurementId: "G-VRYCTGWG2W"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
