import React from "react";
import { Wrapper } from "./Start.style";
import XIcon from "./../icons/XIcon";
import CircleIcon from "./../icons/CircleIcon";
import { GameContext } from "../../context/GameContext";
export default function Start() {
  const { activeUser, setActiveUser, changePlayMode } = React.useContext(GameContext);
  return (
    <Wrapper>
      <div className="start">
        <div className="start__header">
          <XIcon /> <CircleIcon color="yellow" />
        </div>
        <div className="card shadow-gray">
          <h1 className="text-lg">Pick Player First Mark</h1>
          <div className="start__players">
            <span
              className={activeUser === "x" ? "start__players--active" : ""}
              onClick={() => setActiveUser("x")}
            >
              <XIcon color={activeUser ==='x' ? 'dark' :'yellow'} />
            </span>
            <span
              className={activeUser === "o" ? "start__players--active" : ""}
              onClick={() => setActiveUser("o")}
            >
              <CircleIcon color={activeUser ==='o' ? 'dark':'yellow' }/>
            </span>
          </div>
          <p className="text-light">Remember: X goes First</p>
        </div>
        <div className="start__btns">
          <button className="btn btn-blue" onClick={()=>changePlayMode('user')}>New Game VS Player</button>
        </div>
      </div>
    </Wrapper>
  );
}
