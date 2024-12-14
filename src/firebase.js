// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNdxEFDYHh5r9ytNz7PuRpqRTCs6DKfGs",
  authDomain: "netflix-auth-98b24.firebaseapp.com",
  projectId: "netflix-auth-98b24",
  storageBucket: "netflix-auth-98b24.firebasestorage.app",
  messagingSenderId: "614258165896",
  appId: "1:614258165896:web:68beb096bf3392611a373d",
  measurementId: "G-N5QFHXG01R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);