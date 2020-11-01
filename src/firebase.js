import firebase from "firebase/app"
import "firebase/database";

var config = {
    apiKey: "AIzaSyDIAqLGDAG5Jx9hy_1Zd58nsRLx87bBYvw",
    authDomain: "driver-passenger-d4e14.firebaseapp.com",
    databaseURL: "https://driver-passenger-d4e14.firebaseio.com",
    projectId: "driver-passenger-d4e14",
    storageBucket: "driver-passenger-d4e14.appspot.com",
    messagingSenderId: "282479101408",
    appId: "1:282479101408:web:5b8d2c424f0d75dec41785",
    measurementId: "G-ZZMDQ4B26L"
};


firebase.initializeApp(config);

export const database = firebase.database();

export default firebase;
