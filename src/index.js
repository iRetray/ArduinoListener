import React from "react";
import ReactDOM from "react-dom";

import ArduinoListener from "./ArduinoListener";

import {
  FirebaseAppProvider,
  FirestoreProvider,
  DatabaseProvider,
  useFirebaseApp,
} from "reactfire";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

import ComponentWithRealtime from "./ComponentWithRealtime";

import firebaseConfig from "./firebaseConfig";

const AppWithFirebase = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());
  const databaseInstance = getDatabase(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <DatabaseProvider sdk={databaseInstance}>
        <ArduinoListener />
        <ComponentWithRealtime />
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
