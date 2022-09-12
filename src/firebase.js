import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAzrCdH-x7FQGNPAbH7oQgfBe9-WE1vuY",
    authDomain: "react-facebook-badf1.firebaseapp.com",
    projectId: "react-facebook-badf1",
    storageBucket: "react-facebook-badf1.appspot.com",
    messagingSenderId: "191316439689",
    appId: "1:191316439689:web:425749979de4b9103f0c58"
  };

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & provider
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage }
