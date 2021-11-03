import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA2cbOL_kl7osi7-NgmSEzNYk1tLF6rTvY",
  authDomain: "arduinolistener.firebaseapp.com",
  projectId: "arduinolistener",
  storageBucket: "arduinolistener.appspot.com",
  messagingSenderId: "623575533508",
  appId: "1:623575533508:web:d4a978f8ccf8caa3178691",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

class FirebaseService {
  getConsoleMessages() {
    const messagesCollection = collection(db, "consoleMessages");
    getDocs(messagesCollection).then((messagesSnapshot) => {
      console.log({ messagesSnapshot });
    });
  }
}

const newFirebaseService = new FirebaseService();
export default newFirebaseService;
