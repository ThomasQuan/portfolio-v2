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
      // Turn this into a progress bar Home ===> About me ===> Skill ===> Projects ===> Question ===> Contact
      //Avoid using hambergur because it's over use
      <React.Fragment>
        <div className="nav">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <li>
                <a href="#"> Home </a>
              </li>

              <li>
                <a href="#"> About Me </a>
              </li>

              <li>
                <a href="#"> Projects </a>
              </li>

              <li>
                <a href="#"> Question </a>
              </li>

              <li>
                <a href="#"> Contact </a>
              </li>

              <li className="last-child">
                <a href="https://github.com/ThomasQuan">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/thanh-quan-355912169/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.facebook.com/thanh.quan.129357">
                  <i class="fab fa-facebook"></i>
                </a>
                <a data-tip="quantrithanh1999@gmail.com" href="mailto:quantrithanh1999@gmail.com">
                  <i class="far fa-envelope"></i>
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
