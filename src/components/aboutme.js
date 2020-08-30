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
          <div className="about-me-header">
            <h1 className="title">
              &ldquo; The measure of intelligence is the ability to change.
              &rdquo;
            </h1>

            <p> &mdash; Albert Einstein</p>
          </div>

          <div className="about-me-card" id="about-me">
            <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="" />
            <div className="content">
              <h1>Greeting</h1>

              <p id="content">
                My name is Thanh Quan or Thomas as I prefer, I am a Junior
                Software Developer who specialize in Web Development and Mobile
                Development. Previously graduated from George Brown College,
                learning Computer Programing and Analyst. Participate in the
                development of applications using React MERN Stack, Angular MEAN
                Stack along with many other stack which you can take a look at
                my projects display below.
                <br /> <br /> Currently participating in the development of a
                solution for businesses affected by COVID-19 with Prepr as the
                instructor.
                <br /> <br /> As a young energetic person myself, I always
                thrive to bring the best of myself to the position and the
                project. Providing excellent detail-oriented, time management,
                adaptiveness, critical thinking, problem solving and team
                communication during all phases of the System Development Life
                Cycle.
                <br /> <br />I am currently seeking a position where I can
                express my skills and knowleges as a software developer in
                general, leveraging my development expertise to contribute to
                the company missions.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
