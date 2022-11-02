import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwVbxuq2sv2FaCRIE5wXf6Rl0DmBdUSSg",
  authDomain: "airbrill-2c6b8.firebaseapp.com",
  projectId: "airbrill-2c6b8",
  storageBucket: "airbrill-2c6b8.appspot.com",
  messagingSenderId: "1018815669059",
  appId: "1:1018815669059:web:bb1b012f8d5bc13a6985f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;