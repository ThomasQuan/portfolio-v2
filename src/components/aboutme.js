import React, { Component } from "react";
import Avatar from "../assets/avatar.jpg";

class AboutMe extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="about-me">
          <div className="about-me-header" data-aos="fade-left">
            <h1 className="title"> A little bit about me </h1>
            <p className="quote">
              &ldquo; The measure of intelligence is the ability to change.
              &rdquo;{" "}
            </p>
            <p> &mdash; Albert Einstein</p>
          </div>

          <div className="card" data-aos="fade-left" id="about-me">
            <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="" />
            <div className="content">
              <h1>Thanh Quan</h1>
              <h3>Web and Mobile Developer</h3>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum{" "}
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
