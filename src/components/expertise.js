import React, { Component } from "react";
import { ReactComponent as Computer } from "../assets/svg/computer.svg";
import { ReactComponent as Server } from "../assets/svg/server.svg";
import { ReactComponent as ColorWheel } from "../assets/svg/color-wheel.svg";
import { ReactComponent as Tools } from "../assets/svg/tools.svg";

class Expertise extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="skill" id="skill">
          <div className="skill-header">
            <h1>SKILLS</h1>
            <h4>
              “Live as if you were to die tomorrow. Learn as if you were to live
              forever.” ― Mahatma Gandhi
            </h4>
            <h5 style={{ marginTop: "5vh" }}>
              As a developer and a lifetime student, I am always continuously
              learning all the essential tools and skills that are necessary for
              me to become a successful developer.
            </h5>
          </div>
          <div className="skill-container">
            <div data-aos="flip-left" className="skill-container-item">
              <Computer className="svg-icon" />

              <h3> Front-End Development </h3>
              <p>
                HTML,CSS,SASS,jQuery,JavaScript, TypeScript,React,Angular,
                NativeScript,Redux, WordPress.
              </p>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="175"
              className="skill-container-item"
            >
              <Server className="svg-icon" />
              <h3> Back-End Development </h3>
              <p>Java, C#, Python, NodeJS, Express.js, MongoDB, MySQL, JWT, J2EE, JSP</p>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="175"
              className="skill-container-item"
            >
              <ColorWheel className="svg-icon" />
              <h3> UX/UI Design </h3>
              <p>Photoshop, Inkscape, Figma</p>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="175"
              className="skill-container-item"
            >
              <Tools className="svg-icon" />
              <h3> Others </h3>
              <p>
                Trello, Slack, Git, Travis-CI, Machine Learning, Data Analyst.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Expertise;
