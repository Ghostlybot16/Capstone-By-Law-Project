import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdBK1n-8UHPapaH0DOh5jnByXAk4BWLbk",
    authDomain: "capstoneproject-c8508.firebaseapp.com",
    projectId: "capstoneproject-c8508",
    storageBucket: "capstoneproject-c8508.firebasestorage.app",
    messagingSenderId: "80173169650",
    appId: "1:80173169650:web:811654c1c1badd7eae496b"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  export { auth, db };