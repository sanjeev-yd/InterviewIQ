import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-7a354.firebaseapp.com",
  projectId: "interviewiq-7a354",
  storageBucket: "interviewiq-7a354.firebasestorage.app",
  messagingSenderId: "344934916761",
  appId: "1:344934916761:web:269478e4292357f637ce08"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export{auth,provider};