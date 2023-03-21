// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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
const db = getFirestore(app);
// const analytics = getAnalytics(app);
auth.languageCode = 'eng';
const provider = new GoogleAuthProvider(app);

const addUserToDb = async (firstname, lastname, age, email, password) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      firstname: firstname,
      lastname:lastname,
      age:age,
      email: email,
      password: password
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { auth, provider, db, addUserToDb };