import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBPAm2ApdD5a27MUJ-jPPriBs3ARkJBpPg",
    authDomain: "expenditure-manager-1acf7.firebaseapp.com",
    databaseURL: "https://expenditure-manager-1acf7-default-rtdb.firebaseio.com",
    projectId: "expenditure-manager-1acf7",
    storageBucket: "expenditure-manager-1acf7.appspot.com",
    messagingSenderId: "807697768270",
    appId: "1:807697768270:web:22b3fd9613b1245561c81f",
    measurementId: "G-EHX5GGS3FQ"
  };

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}