import Firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCtNJjBzynPj0Zw7I-xRYt5x8MAgCP9I9k",
    authDomain: "scb-app-74d71.firebaseapp.com",
    databaseURL: "https://scb-app-74d71.firebaseio.com",
    projectId: "scb-app-74d71",
    storageBucket: "scb-app-74d71.appspot.com",
    messagingSenderId: "776891955037",
    appId: "1:776891955037:web:97c1bd3dd2b5e854e39ab4",
    measurementId: "G-VYS4M2KJR4"
  };

let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();