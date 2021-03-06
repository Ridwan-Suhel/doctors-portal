// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
// console.log(firebaseConfig);
const firebaseConfig = {
  apiKey: "AIzaSyBk7PMCQynp36d6cq6O6KMGYEYKjlxmzG8",
  authDomain: "doctors-portal-1f360.firebaseapp.com",
  projectId: "doctors-portal-1f360",
  storageBucket: "doctors-portal-1f360.appspot.com",
  messagingSenderId: "383513650966",
  appId: "1:383513650966:web:9036389b5effa4cb8e1237",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
