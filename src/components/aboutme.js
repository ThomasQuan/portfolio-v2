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

          <div className="about-me-card"  id="about-me">
            <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="" />
            <div className="content">
              <h1>Thomas Quan</h1>
              <h3>Software Developer </h3>

              <p id="header"> Greeting</p>
              <p id="content">
                My name is Thanh Quan or Thomas as my English name, I am a
                Junior Software Developer who specialize in Web Development and
                Mobile Development. Previously graduated from George Brown
                College, learning Computer Programing and Analyst. During the
                academic session, took part in developing web application using
                C#, PHP, React MERN Stack, Angular MEAN Stack, and mobile
                development implementing Android Java Native Development, Native
                Script Developer for IOS and Android along with having Data
                Analyst and Machine Learning. As a young energetic person
                myself, I always thrive to bring the best of myself to the jobs
                and the projects. Providing excellent detail-oriented, time
                management, adaptiveness, critical thinking, problem solving and
                team communication during all phases of the System Development
                Life Cycle.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
