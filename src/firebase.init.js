// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8meXJKbpkK6EJp3YFE7YcaLk9g9ZM3Fs",
    authDomain: "fir-router-integration.firebaseapp.com",
    projectId: "fir-router-integration",
    storageBucket: "fir-router-integration.appspot.com",
    messagingSenderId: "602093131784",
    appId: "1:602093131784:web:cf184a3444ddeb3c7719bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;