// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZBC--6XOyC7CCjKqFfNyXgfZ3ITk33rw",
  authDomain: "upmysalary.firebaseapp.com",
  projectId: "upmysalary",
  storageBucket: "upmysalary.appspot.com",
  messagingSenderId: "699775029910",
  appId: "1:699775029910:web:31474f9d64ba852467a8b7",
  measurementId: "G-WS3HN5PH6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
auth.languageCode = 'it';
const provider = new GoogleAuthProvider(app);

export { auth, provider };