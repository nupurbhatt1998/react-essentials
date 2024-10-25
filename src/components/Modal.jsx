const Modal = ({ header, image, text }) => {
  return (
    <div>
      <img src={image} alt={header} />
      <h4>{header}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Modal;