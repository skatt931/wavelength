import React from "react";
import { Link } from "react-router-dom";

export function Selection() {
  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Link to="/game">Start game</Link>
      <div>Selection</div>
    </>
  );
}
