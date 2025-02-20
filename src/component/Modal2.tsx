import { useState } from "react";
import ReactModal from "react-modal";

const Modal2 = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!modalIsOpen);
  };
  return (
    <>
      <button onClick={handleClick}>Open Modal2</button>
      <ReactModal
        isOpen={modalIsOpen}
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
        <h2>Modal2</h2>
        <button onClick={handleClick}>close</button>
        <div>OverlayをClickしてもCloseしないようにする。</div>
      </ReactModal>
    </>
  );
};

export default Modal2;
