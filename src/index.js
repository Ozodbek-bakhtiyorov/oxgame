import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GameContext, GameState } from "./context/GameContext";
import { ModalState } from "./context/ModalContext";
import { GlobalStyles } from "./GlobalStyles";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ModalState>
      <GameState>
        <App />
      </GameState>
    </ModalState>
  </React.StrictMode>
);
