import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="slider-background">
        <div className="slide">
          <img
            src="https://www.coe.int/documents/21864805/57873384/2020_Baku_Cover.jpg/9a924e0e-a377-e8b7-4c5f-ab18efb2c441"
            alt="Slide 1"
            className="slide-image"
          />
        </div>
        <div className="slide">
          <img
            src="https://adventure.com/wp-content/uploads/2020/02/Hero-Solo-travel-perspective-Table-Mountain-with-Kellie-Photo-credit-Kellie-Paxian-1920x1080.jpg"
            alt="Slide 2"
            className="slide-image"
          />
        </div>
        <div className="slide">
          <img
            src="https://aristokrat.az/public/bloggallery/1716189953Nature%20and%20Adventure%20Tourism%20in%20Azerbaijan.jpg"
            alt="Slide 3"
            className="slide-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
