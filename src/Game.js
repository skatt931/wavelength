import React from "react";
import { Link } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";

export function Game({ firestore, firebase }) {
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
    <>
      <Link to="/rules">Rules</Link>
      <button onClick={handleOnclick}>Click</button>
      Game page
    </>
  );
}
