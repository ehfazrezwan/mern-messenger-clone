import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // your Firebase credentials go here
    apiKey: "AIzaSyCezwSkp5dMp2SrqEUuSUjEOU_6BvWbyHQ",
    authDomain: "mern-messenger-clone-ec780.firebaseapp.com",
    databaseURL: "https://mern-messenger-clone-ec780.firebaseio.com",
    projectId: "mern-messenger-clone-ec780",
    storageBucket: "mern-messenger-clone-ec780.appspot.com",
    messagingSenderId: "240267382700",
    appId: "1:240267382700:web:21652f46a53e7e3dd3f409",
    measurementId: "G-W5VV5VBPFP"    
})

const db = firebaseApp.firestore()

export default db