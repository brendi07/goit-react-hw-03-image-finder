import { ImageGalleryItemEl, ImageGalleryItemImage } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ image, onImageClick }) => (
  <ImageGalleryItemEl>
    <ImageGalleryItemImage
      src={image.webformatURL}
      alt={image.id}
      onClick={() => onImageClick(image)}
    />
  </ImageGalleryItemEl>
);