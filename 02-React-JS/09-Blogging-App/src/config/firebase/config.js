import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC0P2LpB_U_1V2WW_QZN7de6K1U1CVXwJo",
  authDomain: "blogging-app-expertizo.firebaseapp.com",
  projectId: "blogging-app-expertizo",
  storageBucket: "blogging-app-expertizo.firebasestorage.app",
  messagingSenderId: "343748925658",
  appId: "1:343748925658:web:fe3acdc44a1d2283d2ede3",
  measurementId: "G-5ZE2FTD8FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app