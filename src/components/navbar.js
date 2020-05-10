import React, { Component } from "react";
import $ from "jquery";
import ReactTooltip from "react-tooltip";

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > window.innerHeight) {
      $(".nav").addClass("navbar-fixed");
    }
    if ($(window).scrollTop() < 947) {
      $(".nav").removeClass("navbar-fixed");
    }
  });
});


class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="nav" >
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <li>
                <a href="#about-me"> About Me </a>
              </li>
              <li>
                <a href="#skill"> Expertise </a>
              </li>
              <li>
                <a href="#projects"> Projects </a>
              </li>

              <li>
                <a href="#contact"> Contact </a>
              </li>

              <li className="last-child">
                <a href="https://github.com/ThomasQuan">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/thanh-quan-355912169/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.facebook.com/thanh.quan.129357">
                  <i className="fab fa-facebook"></i>
                </a>
                <a data-tip="quantrithanh1999@gmail.com" href="mailto:quantrithanh1999@gmail.com">
                  <i className="far fa-envelope"></i>
                </a>
                {<ReactTooltip className="tool-tips" place={'right'} />}
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
