/**
 * Simple modal react componants
 * @param {string} text Text you want to input
 * @param {boolean} IsOpen State variable that define if the modal is opened or closed
 * @param {Function} closeModal setState function that will allow the modal to be closed
 * @returns
 */
export default function Modal({
  text = "Your text here",
  isOpen = false,
  closeModal = () => {},
}) {
  const modalContainerStyle = Object.assign(
    { position: "absolute" },
    { top: "40%" },
    { left: "25%" },
    { background: "#fbfbfb" },
    { width: "50%" },
    { height: "15%" },
    { textAlign: "center" },
    { alignContent: "center" },
    { fontSize: "20px" },
    { border: "1px solid hsl(0, 0%, 80%)" },
    { borderRadius: "5px" },
    { boxShadow: "1px 1px 7px rgb(0 0 0 / 35%)" }
  );

  const modalButtonStyle = Object.assign(
    { position: "absolute" },
    { top: "-20%" },
    { right: "2%" },
    { background: "#e76e6e" },
    { width: "70px" },
    { height: "20px" },
    { textAlign: "center" },
    { fontSize: "14px" },
    { fontWeight: "bold" },
    { border: "1px solid #5b0000" },
    { borderRadius: "5px" }
  );

  const modalOutsideStyle = Object.assign(
    { display: isOpen ? "block" : "none" },
    { position: "absolute" },
    { background: "#ffffff80" },
    { width: "100%" },
    { height: "100%" },
    { zIndex: 1 }
  );
  return (
    <div style={modalOutsideStyle} onClick={closeModal}>
      <div style={modalContainerStyle} className="react-modal">
        <button style={modalButtonStyle} onClick={closeModal}>
          Close
        </button>
        {text}
      </div>
    </div>
  );
}
