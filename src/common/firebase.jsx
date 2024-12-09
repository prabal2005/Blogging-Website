// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMyI0vWtrIGZBWRiVo8k0-CtYOmHlXbQw",
  authDomain: "blogging-website-mern-5f362.firebaseapp.com",
  projectId: "blogging-website-mern-5f362",
  storageBucket: "blogging-website-mern-5f362.firebasestorage.app",
  messagingSenderId: "722889849984",
  appId: "1:722889849984:web:4299e91b88b1a18e1bba65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}