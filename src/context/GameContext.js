import { createContext,useState, useContext, useEffect } from "react";
import { calcWinner } from "../components/utils/calcSquare";
import { ModalContext } from "./ModalContext";

const GameContext = createContext();

const GameState = ({ children }) => {

const {showModal, setShowModal, hideModal,setModalMode} = useContext(ModalContext);


  const [screen, setScreen] = useState("start"); //start ||game;
  const [activeUser, setActiveUser] = useState("x"); //x ||o;
  const [playMode, setPlayMode] = useState("user"); //user ||CPU;

  const [sqrs, setSqrs] = useState(new Array(9).fill(''));
  const [xnext, setXnext] = useState(false);

  const [winner , setWinner] = useState(null);
  const [winnerLine , setWinnerLine] = useState(null);

  const [ties, setTies] = useState({x:0, o:0});

  useEffect ( ()=>{
    checkNoWinner();
    //eslint-disable-next-line
  },[xnext, winner, screen])

const  changePlayMode = (mode)=>{
    setPlayMode(mode);
    setScreen('game');
}

const handleSqrClick = (ix)=>{

    if(sqrs[ix] || winner) return;
    const currentUser = xnext ? 'x' : 'o';
    if(playMode === 'cpu' && currentUser === !activeUser) return;
    let ns = [...sqrs];
    ns[ix] = !xnext? 'x':'o';

    setSqrs(ns);
    setXnext(!xnext);

    //check winner
    checkWinner(ns);
}

const checkWinner = (ns)=>{
    const isWinner = calcWinner(ns);
    if(isWinner){
        setWinner(isWinner.winner);
        setWinnerLine(isWinner.line);
    }

    //set ties
    const ti = {...ties};
    ti[isWinner.winner] += 1;
    setTies(ti)
    showModal();
    setShowModal(true);
}

const handleReset = ()=>{
    setSqrs(new Array(9).fill(''));
    setXnext(false);
    setWinner(null);
    setWinnerLine(null);
    setActiveUser('x');
    setTies({x:0, o:0});
    hideModal();
    setScreen('start');
};

const checkNoWinner = ()=>{
    const moves = sqrs.filter(sq=>sq === '');
    if(moves.length === 0){
        setWinner('no')
        setWinnerLine(null);
        showModal();
        setModalMode('winner');
        setTies(ties);
    }
}

const handleNextRound = ()=>{
    setSqrs(new Array(9).fill(''));
    setXnext(winner === 'x'); 
    setWinner(null);
    setWinnerLine(null);
    hideModal()   

};

  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        setActiveUser,
        playMode,
        changePlayMode,
        sqrs,
        xnext,
        ties,
        handleSqrClick,
        handleNextRound,
        handleReset,
        winner, 
        winnerLine
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameState };
