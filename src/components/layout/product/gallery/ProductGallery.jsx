/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './ProductGallery.scss';
import { useState } from 'react';
mport { ProductGalleryList } from '../../../ExportComponents';

const ProductGallery = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageLoadHandler = () => {
    setImageLoaded(true);
  };

  const updateImage = (index) => {
    setImgIndex(index);
  };

  return (
    <div className="product-gallery">
      <div className="product-gallery--display-img">
        <img
          srcSet={`${images[imgIndex].mobile}, ${images[imgIndex].desktop} 2x`}
          src={images[imgIndex].desktop}
          alt="shoes"
          style={{ filter: imageLoaded ? 'blur(0px)' : 'blur(15px)' }}
          onLoad={imageLoadHandler}
        />
      </div>
      <ProductGalleryList
        images={images}
        onUpdateImage={updateImage}
        setImageLoaded={setImageLoaded}
      />
    </div>
  );
};

export default ProductGallery;
