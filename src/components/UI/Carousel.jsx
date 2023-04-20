import React from "react";
import { iconNext, iconPrevious, Button, imageOne, imageTwo, imageThree, imageFour, imageOneThumb, imageTwoThumb, imageThreeThumb, imageFourThumb } from "../ExportComponents";

const Carousel = () => {
//   const [nextImage, setNextImage] = useState();
//   const [prevImage, setPrevImage] = useState();

  const images = [
    {desktop: imageOne, mobile: imageOneThumb}, 
    {desktop: imageTwo, mobile: imageTwoThumb}, 
    {desktop: imageThree, mobile: imageThreeThumb},
    {desktop: imageFour, mobile: imageFourThumb}
]

  function goToNextImage() {
    // setNextImage((prevImage) => prevImage + 1);
  }

  function goToPreviousImage() {
    // setPrevImage((prevImage) => prevImage - 1);
  }

  return (
    <div className="carousel">
      <Button
        onClick={goToPreviousImage}
        src={iconPrevious}
        title="Previous Image"
        ariaLabel={"Navigate to previous button"}
      />
      <div className="carousel-images">
       {images.map((image, i) => (<picture key={i}>
          <source
            media="(min-width: 678px)"
            srcSet= {image.desktop}
          />
          <img
            srcSet={image.mobile}
            alt="shoes"
          />
        </picture>))}
      </div>
      <Button
        onClick={goToNextImage}
        src={iconNext}
        title="Next Image"
        ariaLabel={"Navigate to next button"}
      />
    </div>
  );
};

export default Carousel;
