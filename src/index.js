import React from "react";
import ReactDOM from "react-dom";

import ArduinoListener from "./ArduinoListener";
import Version from "./Version";

import {
  FirebaseAppProvider,
  FirestoreProvider,
  DatabaseProvider,
  useFirebaseApp,
} from "reactfire";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

import firebaseConfig from "./firebaseConfig";

const AppWithFirebase = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());
  const databaseInstance = getDatabase(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <DatabaseProvider sdk={databaseInstance}>
        <ArduinoListener />
        <Version />
      </DatabaseProvider>
    </FirestoreProvider>
  );
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <AppWithFirebase />
  </FirebaseAppProvider>,
  document.getElementById("root")
);
