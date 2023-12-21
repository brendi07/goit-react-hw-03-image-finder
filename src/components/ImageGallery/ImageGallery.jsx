import { Component } from "react";

import { ImageGalleryList } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import  Modal  from "components/Modal/Modal";

class ImageGallery extends Component {
  state = {
    selectedImage: null,
  };

  // componentDidMount() {
  //   document.addEventListener('keydown', this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('keydown', this.handleKeyDown);
  // }

  // handleKeyDown = event => {
  //   if (event.code === 'Escape') {
  //     this.closeModal();
  //   }
  // };

  openModal = image => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images } = this.props;
    const { selectedImage } = this.state;

    return (
      <div>
        <ImageGalleryList className="ImageGallery">
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onImageClick={this.openModal}
            />
          ))}
        </ImageGalleryList>
        {selectedImage && (
          <Modal
            image={selectedImage.largeImageURL}
            alt={selectedImage.tag}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}


export default ImageGallery;
