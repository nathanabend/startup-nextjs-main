// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Ou3ZdHhe2CjQmNXqxK0RKB87k_CP2-w",
  authDomain: "blockproject-ea9e6.firebaseapp.com",
  projectId: "blockproject-ea9e6",
  storageBucket: "blockproject-ea9e6.appspot.com",
  messagingSenderId: "27625141415",
  appId: "1:27625141415:web:6948b3ab37c725bc57d782"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);



export {auth};
export default db;






