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
          <div className="about-me-container">
            <h1>A LITTLE ABOUT ME.</h1>
            <h2>
              "The measure of intelligence is the ability to change."
              <br />— Albert Einstein
            </h2>
            <p>
              Designing and developing the state-of-the-art, user-friendly,
              responsive application is a mission of mine. Always actively
              seeking out new technologies, learning material and staying up to
              date with the industry trend and advancements. Rendering me to
              become a candidate that is constantly ready to step out of the
              comfort zone to embrace and work on new and exciting technologies
              along with being able to deliver exceptional results. Willing to
              put in the extra time to learn and work on new and exciting
              technologies that are required for current trend of the client.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
