import { initializeApp } from 'firebase/app';

const FirebaseRun = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyDB7kSLyJ7gr9tEIBW9uNnaYcjzUfg-Cxg",
    authDomain: "betterread-e967b.firebaseapp.com",
    projectId: "betterread-e967b",
    storageBucket: "betterread-e967b.appspot.com",
    messagingSenderId: "344077104484",
    appId: "1:344077104484:web:2721b859fbc3c40c2e7671",
    measurementId: "G-YVYBNR6XN3",
    databaseURL: "https://betterread-e967b-default-rtdb.asia-southeast1.firebasedatabase.app/",
  }

  const app = initializeApp(firebaseConfig);
  return app

  // Initialize Firebase

}

export default FirebaseRun