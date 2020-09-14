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
            <h1>Skills &amp; Passion</h1>
            <h4>
              “Live as if you were to die tomorrow. Learn as if you were to live
              forever.” ― Mahatma Gandhi
            </h4>
            <h4 style={{marginTop:'5vh'}}>
              As a Junior Full Stack Developer, I am aiming to master and apply
              all the essential tools and skills that I have acquired to design
              and develop the perfect project for my client.
            </h4>
          </div>
          <div className="skill-container">
            <div data-aos="flip-left" className="skill-container-item">
              <Computer className="svg-icon" />

              <h3> Front-End Development </h3>
              <p>
                I enjoy turning the ideas, the design of the client into life,
                in a user-friendly, responsive way. Implementing a wide range of
                tools, frameworks, or libraries that I have gained experiences
                on.
              </p>
              <span>
                HTML,CSS,SASS,jQuery,JavaScript, TypeScript,React,Angular,
                NativeScript,Redux
              </span>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="300"
              className="skill-container-item"
            >
              <Server className="svg-icon" />
              <h3> Back-End Development </h3>
              <p>
                {/* A beautify website or application isn't the main reason why website thrive and drive users in much
                if it's missing backbone - server. As much as I enjoy delivery
                the client design and help bringing them to life, I also enjoy
                taking my skill as a developer to work on the back-end side, */}
                Working as a back-end developer really brought me the
                opportunity to work on, optimize and secure the flow of the
                website data - ensuring the best performances for the website.
              </p>
              <span>
                Java, C#, Python, NodeJS, Express.js, MongoDB, MySQL, JWT
              </span>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="500"
              className="skill-container-item"
            >
              <ColorWheel className="svg-icon" />
              <h3> UX/UI Design </h3>
              <p>
                As a developer with a keen eye, and interest for design aspect,
                I really enjoy learning and utilizing my skills in UX/UI design
                for building mockup, wireframe, prototypes, materials design.
                Bringing a mean of communication with my clients to better
                understand their problem &amp; needs so that I can provide the
                best solution for their products.
              </p>
              <span>Photoshop, Inkscape, Figma</span>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="700"
              className="skill-container-item"
            >
              <Tools className="svg-icon" />
              <h3> Others </h3>
              <p>
                Aside from developing and designing the website, I also took
                interest in working with other assets such as project management
                tools, DevOps, mobile development or even Machine Learning &amp;
                Data Analyst.
              </p>
              <span>
                Trello, Slack, Git, Travis-CI, Machine Learning, Data Analyst.
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Expertise;
