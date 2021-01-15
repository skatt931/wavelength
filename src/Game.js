import React from "react";
import { Link } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSettingsState } from "./SettingState";

export function Game({ firestore, firebase }) {
  const settingsState = useSettingsState();
  const cardsRef = firestore.collection("cards");
  const query = cardsRef.orderBy("type").limit(25);
  const [cards] = useCollectionData(query, { idField: "id" });

  console.log(cards);
  console.log(settingsState.cardsType);
  const handleOnclick = () => {
    // cardsRef.add({
    //   leftWord: "test",
    //   rightWord: "test",
    //   type: "test",
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp()
    // });
  };

  console.log(state.get());

  return (
    <>
      <Link to="/rules">Rules</Link>
      <button onClick={handleOnclick}>Click</button>
      Game page
    </>
  );
}
