import React from "react";
import { CardWrapper } from "./Board.styles";
import XIcon from "./../icons/XIcon";
import CircleIcon from "./../icons/CircleIcon";
import { GameContext } from "../../context/GameContext";

export default function BoardCard({ user = "nouser", active, index }) {
  const {handleSqrClick} = React.useContext(GameContext);
  return (
    <CardWrapper
      className={`card ${active && user === "x" && "shadow-blue"} ${
        active && user === "o" && "shadow-yellow"
      } ${!active ? "shadow-gray" : "active"}`}
      onClick = {()=>handleSqrClick(index)}
    >
      {user === "x" && <XIcon color={active && "dark"} size="lg" />}
      {user === "o" && <CircleIcon color={active && "dark"} size="lg" />}
    </CardWrapper>
  );
}
