import {useContext} from 'react';
import { Board, Modal } from "./components";
import styled from 'styled-components';
import { d_flex } from "./Mixins";
import { GameContext } from "./context/GameContext";
import Start from './components/start/index';
function App() {
  const {screen} =useContext(GameContext);
  return (
    <Wrapper>
      <div className="container">
      {screen === 'start' && <Start/>}
      {screen === 'game' &&<Board />
    }
        <Modal/>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  ${d_flex('', 'center','center')};
`

export default App;
