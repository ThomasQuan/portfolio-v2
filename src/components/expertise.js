import React, { Component } from "react";
import CanvasJSReact from "../styles/canvas/canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Expertise extends Component {
  state = {};
  render() {
    const pie_options = {
      exportEnabled: false,
      theme: "light2",
      backgroundColor: "#e2e0d4",
      title: {
        text: "MY SKILLS",
      },
      data: [
        {
          type: "pie",
          //percentage of each pie piece
          indexLabelFontSize: 18,
          startAngle: -90,

          dataPoints: [
            { y: 13, label: "Python Data Analyst and Machine Learning " },
            { y: 7, label: "Mobile Development" },
            { y: 5, label: "AWS Cloud Computing Service" },
            { y: 5, label: ".NET " },
            { y: 17, label: "NativeScript " },
            { y: 5, label: "Docker" },
            { y: 22, label: "ReactJS" },
            { y: 15, label: "Angular" },
            { y: 11, label: "Data Structures & Algorithm" },
          ],
        },
      ],
    };

    const bar_options = {
      exportEnabled: false,
      backgroundColor: "#e2e0d4",
      data: [
        {
          type: "bar",
          dataPoints: [
            { y: 100, label: "JavaScript" },
            { y: 110, label: "NodeJS" },
            { y: 120, label: "HTML/CSS" },
            { y: 70, label: "SASS" },
            { y: 60, label: "Java" },
            { y: 60, label: "C#" },
            { y: 70, label: "Python" },
            { y: 70, label: "SQLite" },
            { y: 50, label: "Oracle SQL" },
          ],
        },
      ],
    };
    return (
      <React.Fragment>
        <div className="skill" id="skill">
          <div className="skill-desc" data-aos="fade-right">
            <h1>Consider hiring me</h1>
            <p>
              I'm skill in designing, developing and maintaining application
              either it's for a mobile application or web application by
              implementing the latest date technology and software. Most of the
              tools that I use for building my application resolve around
              HTML/CSS and Javascript, but I'm not limited to it as I'm
              flexiable to switch between other field and languages as needed.
              My strong point in programming are anything that is based around
              Node.js or functional programming, but I'm also good at Object
              oriented base languages such as C# and Java.
            </p>
            <br></br>
            <h1>Service provided</h1>
            <ul className="service">
              <li> UI/UX Design </li>
              <li> Front End Development </li>
              <li> Back End Development </li>
              <li> Mobile Development </li>
              <li> Data Analyst </li>
            </ul>
          </div>
          <div className="skill-graph" data-aos="fade-left">
            <CanvasJSChart options={pie_options} />
            <CanvasJSChart options={bar_options} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Expertise;
