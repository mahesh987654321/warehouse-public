// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx37FVOVpTxd9OFaPjDt5Jan0ZGTRJrKQ",
  authDomain: "assignment-11-22623.firebaseapp.com",
  projectId: "assignment-11-22623",
  storageBucket: "assignment-11-22623.appspot.com",
  messagingSenderId: "901034110086",
  appId: "1:901034110086:web:4970c3b13fce924a2d3507",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
