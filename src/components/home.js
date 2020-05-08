import React, { Component } from "react";
import $ from "jquery";
class Home extends Component {
  state = {};
  openSlide = () => {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#about-me").offset().top
  }, 1500);
  };
  render() {
    return (
      <React.Fragment>
        <div className="container" data-aos="fade-out" data-aos-duration="3000">
          <h1 className="container-title">Welcome to my portfolio</h1>

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
