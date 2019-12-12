import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCkmmrwt-DVldeL9CStxrroZacz5W69zOo",
    authDomain: "curling-club-75c91.firebaseapp.com",
    databaseURL: "https://curling-club-75c91.firebaseio.com",
    projectId: "curling-club-75c91",
    storageBucket: "curling-club-75c91.appspot.com",
    messagingSenderId: "26571857804",
    appId: "1:26571857804:web:66fee62eefc58b868bc0a9",
    measurementId: "G-79JY3KXLVC"
  };

  firebase.initializeApp(config);
  firebase.firestore();

  export default firebase;