import { useState } from "react";
import ReactModal from "react-modal";

const Modal1 = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!modalIsOpen);
  };
  return (
    <>
      <button onClick={handleClick}>Open Modal1</button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleClick}
        contentLabel="Modal2"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "90%",
            minWidth: "320px",
            maxWidth: "900px",
          },
        }}
      >
        <h2>Modal1</h2>
        <button onClick={handleClick}>close</button>
        <div>OverlayをClickして閉じれるようにする。</div>
      </ReactModal>
    </>
  );
};

export default Modal1;
