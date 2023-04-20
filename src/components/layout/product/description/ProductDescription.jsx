import React from "react";
import "./ProductDescription.scss";

const ProductDescription = () => {
  return (
    <div className="product-description">
      <p className="product-description__brand">Sneaker Company</p>
      <h1 className="product-description__title">
        Fall Limited Edition Sneakers
      </h1>
      <p className="product-description__para">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product-description__price">
        <h2 className="product-description__price--current">$125.00</h2>
        <p className="product-description__price--discount">50%</p>
        <p className="product-description__price--original">$250.00</p>
      </div>
    </div>
  );
};

export default ProductDescription;
