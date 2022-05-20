import React from "react";
import { Wrapper } from "./Board.styles";
import XIcon from "../icons/XIcon";
import CircleIcon from "../icons/CircleIcon";
import RedoIcon from "./../icons/RedoIcon";
import BoardCard from "./BoardCard";
import { GameContext } from "../../context/GameContext";
import { ModalContext } from "../../context/ModalContext";
export default function Board() {
  const { sqrs, xnext, ties, winner, winnerLine } =React.useContext(GameContext);
  const {showModal,setModalMode} = React.useContext(ModalContext);
const resetGame = () => {
  showModal();
  setModalMode("start");
}
console.log({winner,winnerLine})
  return (
    <Wrapper>
      <div className="board">
        <div className="board__header">
          <div>
            <XIcon />
            <CircleIcon color="yellow" />
          </div>
          <div className="board__turn">
            {!xnext ? (
              <XIcon size="sm" color="yellow" />
            ) : (
              <CircleIcon size="sm" color="yellow" />
            )}
            turn
          </div>
          <div>
            <button className="btn board__restart btn-sm" onClick={resetGame}>
              <RedoIcon color="dark" />
            </button>
          </div>
        </div>
        <div className="board__body">
          {sqrs.map((sqr, idx) => (
            <BoardCard
              key={idx}
              user={sqr}
              active={winner && winnerLine && winnerLine.includes(idx)}
              index={idx}
            />
          ))}
        </div>
        <div className="board__footer">
          <div class="card bg-blue">
            <p className="text-light">x(Player1)</p>
            <strong className="text-2xl">{ties.x}</strong>
          </div>
          <div class="card bg-blue">
            <p className="text-light">Rounds</p>
            <strong className="text-2xl">{ties.x + ties.o}</strong>
          </div>
          <div class="card bg-yellow">
            <p className="text-light "> O(Player2)</p>
            <strong className="text-2xl">{ties.o}</strong>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
