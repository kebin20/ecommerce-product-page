import React from "react";
import {
  ProductDescription,
  Carousel,
  Button,
  iconPlus,
  iconMinus,
  iconCart,
} from "../../ExportComponents";

const ProductOverview = () => {

  function deleteItem() {}

  function addItem() {}

  function addToCart() {}

  return (
    <div>
      <Carousel />
      <ProductDescription />
      <div className="item-counter">
        <Button
          onClick={deleteItem}
          src={iconMinus}
          title="Minus Icon"
          ariaLabel={"Decrement product quantity"}
        />
        <span>0</span>
        <Button
          onClick={addItem}
          src={iconPlus}
          title="Plus Icon"
          ariaLabel={"Increment product quantity"}
        />
      </div>
      <Button
        onClick={addToCart}
        src={iconCart}
        title="Cart icon"
        ariaLabel={"add to cart"}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductOverview;
