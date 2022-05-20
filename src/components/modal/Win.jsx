import React, { Fragment } from "react";
import { WinStyles } from "./Modal.styles";
import XIcon from "./../icons/XIcon";
import { GameContext } from "../../context/GameContext";
import CircleIcon from "./../icons/CircleIcon";

export default function Win() {
  const { winner, handleReset, handleNextRound } =
    React.useContext(GameContext);

  return (
    <WinStyles>
      <div class="score">
        {winner && winner !== "no" ? (
          <Fragment>
            <p>You Win!</p>
            <h3 className="score__title">
              {winner === "x" ? <XIcon /> : <CircleIcon color="yellow" />}Takes
              the round
            </h3>
          </Fragment>
        ) : (
          <h3 className="score__title ">NO winner</h3>
        )}

        <div className="score__btn">
          <button className="btn btn-sm" onClick={handleReset}>
            Quit
          </button>
          <button className="btn btn-sm btn-yellow" onClick={handleNextRound}>
            Next Round
          </button>
        </div>
      </div>
    </WinStyles>
  );
}
