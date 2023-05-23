import React from "react";
import {
  ProductDescription,
  Carousel,
  Button,
  iconPlus,
  iconMinus,
  iconCartWhite,
  ProductGallery,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageOneThumb,
  imageTwoThumb,
  imageThreeThumb,
  imageFourThumb,
} from '../../ExportComponents';
import './ProductOverview.scss';


const ProductOverview = () => {
  const images = [
    { desktop: imageOne, mobile: imageOneThumb },
    { desktop: imageTwo, mobile: imageTwoThumb },
    { desktop: imageThree, mobile: imageThreeThumb },
    { desktop: imageFour, mobile: imageFourThumb },
  ];

  function deleteItem() {}

  function addItem() {}

  function addToCart() {}

  return (
    <main className="product-overview">
      <Carousel images={images} />
      <ProductGallery images={images} />
      <div className="product-overview__content">
        <ProductDescription />
        <div className="button-container">
          <div className="item-counter">
            <Button
              onClick={deleteItem}
              src={iconMinus}
              title="Minus Icon"
              ariaLabel={'Decrement product quantity'}
            />
            <span className="counter-number">0</span>
            <Button
              onClick={addItem}
              src={iconPlus}
              title="Plus Icon"
              ariaLabel={'Increment product quantity'}
            />
          </div>
          <div className="cart-button">
            <Button
              onClick={addToCart}
              src={iconCartWhite}
              title="Cart icon"
              ariaLabel={'add to cart'}
            ></Button>
            <span>Add to Cart</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductOverview;
