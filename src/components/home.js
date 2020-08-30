import React, { Component } from "react";
import $ from "jquery";
class Home extends Component {
  state = {};
  openSlide = () => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#about-me").offset().top,
      },
      750
    );
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="home-container"
       
        >
          {/* <h1 className="container-title">Welcome to my portfolio</h1> */}
          <div className="outer-layer">
            <div className="clip-text">Thanh Quan </div>
          </div>
          <h1 className="home-container-subtitle">Junior Software Developer</h1>

          <button onClick={this.openSlide} id="sliderToggle">
            <input type="checkbox" />

            {/* Left */}
            <div className="left-wing">
              <span></span>
              <span></span>
            </div>
            {/* Right */}
            <div className="right-wing">
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
