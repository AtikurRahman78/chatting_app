// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVaMyX15WeZXCK-1xt0wvs3O-2DtxVEiE",
  authDomain: "student-2de37.firebaseapp.com",
  databaseURL: "https://student-2de37-default-rtdb.firebaseio.com",
  projectId: "student-2de37",
  storageBucket: "student-2de37.appspot.com",
  messagingSenderId: "667233847097",
  appId: "1:667233847097:web:72ca2460895d929eb7cae8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;