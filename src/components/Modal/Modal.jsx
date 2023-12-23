import { Component } from "react";
import { ModalOverlay, ModalEl } from "./Modal.styled";

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleCloseModal = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image, alt, onClose } = this.props;

    return (
      <ModalOverlay onClick={this.handleCloseModal}>
        <ModalEl>
          <img src={image} alt={alt} />
          <button onClick={onClose}></button>
        </ModalEl>
      </ModalOverlay>
    );
  }
};

export default Modal;