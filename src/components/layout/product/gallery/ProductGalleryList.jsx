import { useState } from 'react';
import './ProductGalleryList.scss';

const ProductGalleryList = ({ images, onUpdateImage, setImageLoaded }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const imageHandler = (e) => {
    onUpdateImage(e.target.dataset.index);
    //e.target.dataset.index is treated as a string, covert to number
    setActiveIndex(parseInt(e.target.dataset.index));
    setImageLoaded(false);
  };

  const imgItem = images.map((image, i) => (
    <li
      onClick={imageHandler}
      key={i}
      className={`product-gallery--list__item ${
        activeIndex === i ? 'active' : ''
      }`}
    >
      <img
        id={image.id}
        srcSet={`${image.mobile}, ${image.desktop} 2x`}
        src={image.desktop}
        alt="shoes"
        data-index={i}
      />
    </li>
  ));

  return <ul className="product-gallery--list">{imgItem}</ul>;
};

export default ProductGalleryList;
