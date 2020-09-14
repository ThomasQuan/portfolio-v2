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
          <div  className="about-me-container">
            <h1>
              "The measure of intelligence is the ability to change." 
              <br/>— Albert
              Einstein
            </h1>
            <p>
              Web design and development are my passion! I am a driven Junior
              Developer dedicated to perfecting my applicational design and
              development following best practices and implementations.
              <br />
              <br />
              My greatest strength is my adaptability – to always be ready to
              embrace new trends and technologies. As a young energetic and
              enthusiastic problem solver, I continuously search for new tactics
              or implementations for me to learn and practice on to better
              myself for the current or future position.
              <br />
              <br />
              As a team member for any given project, I always try my best to
              become a reliable team member. Providing excellent management for
              project roadmap and deadline, conducting weekly or daily meetings
              to keep everyone up to date on the current state.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
