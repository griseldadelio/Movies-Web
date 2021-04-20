import React from "react";
import '../styles/modal.css';

const Modal = ({ text }) => {

  return (
    <>
      <div className="background-blurred" />
      <div className={`modal-container`}>
        <p className={`modal-text`}>{text}</p >
      </div>
    </>
  );
};

export { Modal };
