import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import slide1 from "../../../../src/images/slide-1.jpeg";
import slide2 from "../../../../src/images/slide-2.jpg";
import slide3 from "../../../../src/images/slide-3.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item className="carousel-item" interval={1000}>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={500}>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={slide3} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
