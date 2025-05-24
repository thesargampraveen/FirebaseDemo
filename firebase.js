// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1u8MYTQpQyIm-KiCeTVWV55VLnqBcrzM",
  authDomain: "Yfir-demo-8bc96.firebaseapp.com",
  projectId: "fir-demo-8bc96",
  storageBucket: "fir-demo-8bc96.appspot.com",
  messagingSenderId: "849113520491",
  appId: "1:849113520491:android:15188cf96d6748dca2d42e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
