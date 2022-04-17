// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAofwBFGs4kvv3uFkoFF3EpEeEpZYw7Ya4",
  authDomain: "hire-me-photography.firebaseapp.com",
  projectId: "hire-me-photography",
  storageBucket: "hire-me-photography.appspot.com",
  messagingSenderId: "194884810250",
  appId: "1:194884810250:web:be4ba58ca1fd52278f91f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
