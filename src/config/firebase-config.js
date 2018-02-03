
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCLOKuCvwYEAPqMLe4G0BftgYRaTYPt3OI",
    authDomain: "reactconf-6ab3e.firebaseapp.com",
    databaseURL: "https://reactconf-6ab3e.firebaseio.com",
    projectId: "reactconf-6ab3e",
    storageBucket: "reactconf-6ab3e.appspot.com",
    messagingSenderId: "664957710483"
  };
export const firebaseApp = firebase.initializeApp(firebaseConfig);