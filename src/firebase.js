import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIxWhdJ8JpTWFJj7E3QfOXako0DCVcV7s",
    authDomain: "linkedin-clone-ae628.firebaseapp.com",
    projectId: "linkedin-clone-ae628",
    storageBucket: "linkedin-clone-ae628.appspot.com",
    messagingSenderId: "191133350089",
    appId: "1:191133350089:web:0f2e973290d6757d6c3518"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};