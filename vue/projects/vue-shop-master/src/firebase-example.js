
import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBtVXJ0hkljDTWd1G-OcuMYjjM4_cV5-80",
    authDomain: "vuejsmob.firebaseapp.com",
    databaseURL: "https://vuejsmob.firebaseio.com",
    projectId: "vuejsmob",
    storageBucket: "vuejsmob.appspot.com",
    messagingSenderId: "885866208440",
    appId: "1:885866208440:web:fd8c74eb50cc19d67ee84d",
    measurementId: "G-TDR30JWJXH"
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}