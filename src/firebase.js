// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAZZ5NBdeX8vX2SwLMaPZn_UNgH83309jc",
  authDomain: "clone-82a75.firebaseapp.com",
  projectId: "clone-82a75",
  storageBucket: "clone-82a75.appspot.com",
  messagingSenderId: "451445963529",
  appId: "1:451445963529:web:0174c54ab1f2d6c157f1d8",
  measurementId: "G-4KWQKJ9QEP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
