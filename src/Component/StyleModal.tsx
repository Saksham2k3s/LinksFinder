// Modal.js
import React, { useState } from "react";


const StyledModal = ({ isOpen, title, onClose, children,footer }) => {
  const [modalStyle, setModalStyle] = useState({
    display: isOpen ? 'block' : 'none',
  });
  const closeModal = () => {
    setModalStyle({ display: 'none' });
    onClose();
  };

  return (
    <div className="styled-modal" style={modalStyle}>
      <div className="content">
        <div className="title">
          <h4>{title}</h4>
          <span className="close" onClick={closeModal}>
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


