import React from 'react'
import { GameContext } from '../../context/GameContext';
import { ModalContext } from '../../context/ModalContext';
import { RestartStyles } from './Modal.styles'

export default function Restart() {
  const { handleReset} =React.useContext(GameContext);
  const {hideModal} = React.useContext(ModalContext);
  return (
 
    <RestartStyles>
        <div class="restart">
            <h3 className='restart__title'>Restart Game?</h3>
            <div className="restart__btns">
                <button className='btn btn-sm' onClick={hideModal}>no, Cancel</button>
                <button className='btn btn-sm btn-yellow' onClick={handleReset}>Yes, REstart</button>
            </div>
        </div>
    </RestartStyles>
  )
}
