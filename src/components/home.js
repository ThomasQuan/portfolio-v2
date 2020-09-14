import React, { Component } from "react";
import { ReactComponent as ThanhQuanSVG } from "../assets/svg/thanh_quan.svg";

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
        <div  className="home-container">
          <div className="home-content">
            <div className="home-title">
              <ThanhQuanSVG className='svgName evangelion-font evangelion-text-shadwo'  />
              <h1  className='evangelion-font' >
                Junior Full Stack Developer
              </h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="1700" className="subtitle-container">
              <h3>
                I help design and developer the ideas website &amp; application
                that the company.
              </h3>
            </div>
          </div>

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
