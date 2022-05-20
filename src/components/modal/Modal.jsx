import React, { Fragment } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Wrapper } from "./Modal.styles";
import Restart from "./Restart";
import Win from "./Win";

export default function Modal() {
  const { show, showModal, modalMode } = React.useContext(ModalContext);
  return (
    <Fragment>
      {show && (
        <Wrapper>
          <div className="Modal">
            <div className="Modal__content">
              <div className="container">
                {modalMode === "winner" && <Win/>}
                {modalMode === "start" && <Restart/>}
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </Fragment>
  );
}
