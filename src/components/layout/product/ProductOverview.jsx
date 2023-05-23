import React from "react";
import {
  ProductDescription,
  Carousel,
  Button,
  iconPlus,
  iconMinus,
  iconCartWhite,
} from "../../ExportComponents";
import "./ProductOverview.scss";

const ProductOverview = () => {

  function addItem() {}

  function addToCart() {}

  return (
    <div>
      <Carousel />
      <ProductDescription />
      <div className="button-container">
        <div className="item-counter">
          <Button
            onClick={deleteItem}
            src={iconMinus}
            title="Minus Icon"
            ariaLabel={"Decrement product quantity"}
          />
          <span className="counter-number">0</span>
          <Button
            onClick={addItem}
            src={iconPlus}
            title="Plus Icon"
            ariaLabel={"Increment product quantity"}
          />
        </div>
        <div className="cart-button">
          <Button
            onClick={addToCart}
            src={iconCartWhite}
            title="Cart icon"
            ariaLabel={"add to cart"}
          ></Button>
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
