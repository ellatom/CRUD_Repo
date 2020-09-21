import React from "react";
<<<<<<< HEAD
=======
import './main.css'
>>>>>>> second push re-arranged the code

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container" style={{fontSize:'10px',maxWidth:'128px'}}>
        {children}
      </div>
    </div>
  );
};

export default Modal;