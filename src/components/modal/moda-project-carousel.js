import React from "react";
import Slider from "react-slick";

const ProjectCarousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
    fade: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          autoplay: true,
          autoplaySpeed: 2500,
          arrows: false,

        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {props.images.map((img, idx) => (
        <div key={idx} className="slider-div">
          <img src={img} className="slide-img" alt="project-images"></img>
        </div>
      ))}
    </Slider>
  );
};

export default ProjectCarousel;
