// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrtke431oe10LR5wmKwNUonfqEN3vU5L4',
  authDomain: 'doctors-website-9abee.firebaseapp.com',
  projectId: 'doctors-website-9abee',
  storageBucket: 'doctors-website-9abee.appspot.com',
  messagingSenderId: '527480043619',
  appId: '1:527480043619:web:482d5345ecc4df8f896056',
};

console.log(process.env.REACT_APP_FIREBASE_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
