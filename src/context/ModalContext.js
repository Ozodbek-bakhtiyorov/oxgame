import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalState = ({ children }) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("winner"); // winner or start
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);
  return (
    <ModalContext.Provider
      value={{
        show,
        modalMode: mode,
        setModalMode: setMode,
        showModal,
        hideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalState, ModalContext };
