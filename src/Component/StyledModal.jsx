import React, { useState, useContext } from "react";
import HooksContext from "./Context/HooksContext";
const StyledModal = ({ isOpen, title, onClose, children, footer }) => {
  const context = useContext(HooksContext);
  const { mode } = context;
  const [modalStyle, setModalStyle] = useState({
    display: isOpen ? "block" : "none",
  });
  const closeModal = () => {
    setModalStyle({ display: "none" });
    onClose();
  };

  return (
    <div className="styled-modal" style={modalStyle}>
      <div
        className={`content ${
          mode === false ? "backgroundLight" : "backgroundDark"
        }`}
      >
        <div className="title">
          <h4>{title}</h4>
          <span className={`close ${mode === false ? "close" : "closeLight"}`} onClick={closeModal}>
            &times;
          </span>
        </div>
        <div className="body">{children}</div>
        {footer && <div className="footer">{footer}</div>}
      </div>
    </div>
  );
};

export default StyledModal;
