import React from "react";
import "./styles.css";
import { Rules } from "./Rules";
import { Selection } from "./Selection";
import { Game } from "./Game";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Selection />
          </Route>
          <Route path="/rules" exact>
            <Rules />
          </Route>
          <Route path="/game" exact>
            <Game firestore={firestore} firebase={firebase} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
