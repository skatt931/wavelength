import React from "react";
import "./styles.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyA_mrf-yW9djUOWvGzEsJZQMLwaXSvhNAg",
    authDomain: "wavelength-1eb1c.firebaseapp.com",
    projectId: "wavelength-1eb1c",
    storageBucket: "wavelength-1eb1c.appspot.com",
    messagingSenderId: "661664724540",
    appId: "1:661664724540:web:f9900d21cf23fbf42ef539",
    measurementId: "G-YVQWF1XXP8"
  });
}

const firestore = firebase.firestore();

export default function App() {
  const cardsRef = firestore.collection("cards");
  const query = cardsRef.orderBy("type").limit(25);
  const [cards] = useCollectionData(query, { idField: "id" });

  console.log(cards);

  const handleOnclick = () => {
    cardsRef.add({
      leftWord: "test",
      rightWord: "test",
      type: "test",
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleOnclick}>Click</button>
    </div>
  );
}
