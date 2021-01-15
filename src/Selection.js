import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSettingsState } from "./SettingState";

const StyledWrapper = styled.div``;
const StyledButton = styled.button``;

export function Selection() {
  const settingsState = useSettingsState();
  const handleClick = () => {
    console.log(settingsState.cardsType);
    settingsState.setCardsType("hard");
    console.log(settingsState.cardsType);
  };
  return (
    <StyledWrapper>
      <h1>WaveLength</h1>
      <StyledButton>hello</StyledButton>
      <button onClick={handleClick}>change</button>
      <Link to="/game">Start game</Link>
    </StyledWrapper>
  );
}
