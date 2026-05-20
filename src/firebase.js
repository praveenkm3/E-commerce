import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApWCKwe0TdWuVZUWW1xQihhzw7zQSUsDg",
  authDomain: "reactapp-b936c.firebaseapp.com",
  projectId: "reactapp-b936c",
  storageBucket: "reactapp-b936c.firebasestorage.app",
  messagingSenderId: "160202396772",
  appId: "1:160202396772:web:c48a4e1e0c07c09aaa3b71",
  measurementId: "G-CRQ9N90XR0"
};
 
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export { auth,provider };
export default db;

 

