import React from "react";
import ReactDOM from "react-dom";

import ArduinoListener from "./ArduinoListener";

import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

const AppWithFirebase = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <ArduinoListener />
    </FirestoreProvider>
  );
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <AppWithFirebase />
  </FirebaseAppProvider>,
  document.getElementById("root")
);
