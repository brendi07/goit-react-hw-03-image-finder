import { ModalOverlay, ModalEl } from "./Modal.styled";

export const Modal = ({ image, alt, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalEl>
        <img src={image} alt={ alt} />
      </ModalEl>
    </ModalOverlay>
  );
};
