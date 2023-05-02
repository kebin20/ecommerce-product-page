import React, { useState, useEffect } from "react";
import {
  iconNext,
  iconPrevious,
  Button,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageOneThumb,
  imageTwoThumb,
  imageThreeThumb,
  imageFourThumb,
} from "../ExportComponents";
import "./Carousel.scss";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLeftBtnActive, setIsLeftBtnActive] = useState(false);
  const [isRightBtnActive, setIsRightBtnActive] = useState(true);

  const images = [
    { desktop: imageOne, mobile: imageOneThumb },
    { desktop: imageTwo, mobile: imageTwoThumb },
    { desktop: imageThree, mobile: imageThreeThumb },
    { desktop: imageFour, mobile: imageFourThumb },
  ];

  useEffect(() => {
    if (activeIndex === 0) {
      setIsLeftBtnActive(false);
    } else if (activeIndex === images.length - 1) {
      setIsRightBtnActive(false);
    } else {
      setIsLeftBtnActive(true);
      setIsRightBtnActive(true);
    }
  }, [activeIndex]);

  function goToNextImage() {
    setActiveIndex((prevIndex) => prevIndex + 1);
  }

  function goToPreviousImage() {
    setActiveIndex((prevIndex) => prevIndex - 1);
  }

  return (
    <div className="carousel">
      <Button
        className={`btn-carousel previous ${isLeftBtnActive ? "show" : ""}`}
        onClick={goToPreviousImage}
        src={iconPrevious}
        title="Previous Image"
        ariaLabel={"Navigate to previous button"}
        disabled={isLeftBtnActive}
      />
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, i) => (
          <picture key={i}>
            <source media="(max-width: 300px)" srcSet={image.mobile} />
            <source media="(min-width: 301px)" srcSet={image.desktop} />
            <img srcSet={image.mobile} alt="shoes" />
          </picture>
        ))}
      </div>
      {isRightBtnActive && (
        <Button
          className={`btn-carousel next ${isRightBtnActive ? "show" : ""}`}
          onClick={goToNextImage}
          src={iconNext}
          title="Next Image"
          ariaLabel={"Navigate to next button"}
          disabled={isRightBtnActive}
        />
      )}
    </div>
  );
};

export default Carousel;
