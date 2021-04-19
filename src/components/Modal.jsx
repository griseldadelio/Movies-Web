import React from "react";
import '../styles/modal.css';

const Modal = ({ text }) => {

  return (
    <>
      <div className="background-blurred" />
      <div className={`modal-container`}>
        <text className={`modal-text`}>{text}</text>
      </div>
    </>
  );
};

export { Modal };
