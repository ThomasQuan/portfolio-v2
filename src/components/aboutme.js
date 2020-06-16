import React, { Component } from "react";
class AboutMe extends Component {
  state = { numPages: null, pageNumber: 1 };
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  render() {
    return (
      <React.Fragment>
        <div className="about-me" id="about-me">
          <div className="about-me-header" data-aos="fade-left">
            <h1 className="title"> A little bit about me </h1>
            <p className="quote">
              &ldquo; The measure of intelligence is the ability to change.
              &rdquo;{" "}
            </p>
            <p> &mdash; Albert Einstein</p>
          </div>

          <div className="about-me-card" data-aos="fade-left" id="about-me">
            <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="" />
            <div className="content">
              <h1>Thomas Quan</h1>
              <h3>Software Developer </h3>
              <p className="status">
                <i className="fas fa-lightbulb"></i> Currently building Pokemon Team
                Analyst and learning PostgresQL
              </p>
              <p id="header"> Greeting</p>
              <p id="content">
                My name is Thomas Quan and I grew up in a family of 5 in a busy
                street of Saigon in Viet Nam, spend most of my childhood resolve
                around computer and software, I fell in love with it and decided
                to become a software developer. After highs school graduation I
                move to Toronto in pursuit of getting a career as a software
                developer. Graduated from George Brown college with a GPA of
                3.34 in Computer Programming and Analyst. Aside from that, I
                still spend most of my time playing videos of different genre
                with my friend, but I gain a new hobby of reading related
                software article or Philosophy books or sometime light novel
                that intrigue me. Currently I am seeking for an opportunity as a
                position as a web developer or mobile developer. Location most
                likely is not a problem for me because I can move to any place
                to work. You can check my work below for more information about
                me and the projects that I have done.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
