import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import "firebase/compat/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyBrjAusrKJC2znKXq75j9EDAXnG583CY-k",
    authDomain: "dbpets-29375.firebaseapp.com",
    projectId: "dbpets-29375",
    storageBucket: "dbpets-29375.appspot.com",
    messagingSenderId: "494473295156",
    appId: "1:494473295156:web:37ba173fa302cf96786161",
    measurementId: "G-6939M50FQ5"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = getAuth(app)