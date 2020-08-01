import React from "react";
import Slider from "react-slick";

const ProjectCarousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
    fade: true,
    arrows: true,
    className: "slides",
  };
  return (
    <Slider {...settings}>
      {props.images.map((img) => (
        <div className="slider-div">
          <img src={img} className="slide-img" alt="project-images"></img>
        </div>
      ))}
    </Slider>
  );
};

export default ProjectCarousel;
