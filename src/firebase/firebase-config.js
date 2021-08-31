import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCRcUDRyV2RHPk0nzkYPNcIjBD1sleSbGs",
    authDomain: "login-react-app-a1eb0.firebaseapp.com",
    projectId: "login-react-app-a1eb0",
    storageBucket: "login-react-app-a1eb0.appspot.com",
    messagingSenderId: "904534681659",
    appId: "1:904534681659:web:40cc4621a7ac7a37fb541e"
};

firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



export {
    db,
    googleAuthProvider,
    firebase
}












