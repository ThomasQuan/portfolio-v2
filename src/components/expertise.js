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
        text: "TECH STACK",
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
            { y: 5, label: "DevOp" },
            { y: 5, label: ".NET " },
            { y: 17, label: "NativeScript " },
            { y: 5, label: "Docker" },
            { y: 22, label: "ReactJS" },
            { y: 15, label: "Angular" },
            { y: 11, label: "Data Structures & Algorithm" },
            { y: 5, label: "Redux" },
          ],
        },
      ],
    };

    const bar_options = {
      exportEnabled: false,
      backgroundColor: "#e2e0d4",
      title: {
        text: "My Skill & Knowledge",
      },
      data: [
        {
          type: "bar",
          dataPoints: [
            { y: 95, label: "JavaScript" },
            { y: 80, label: "NodeJS" },
            { y: 100, label: "HTML/CSS" },
            { y: 80, label: "SASS" },
            { y: 60, label: "Java" },
            { y: 55, label: "C#" },
            { y: 70, label: "Python" },
            { y: 70, label: "SQL" },
            { y: 85, label: "TypeScript" },
            { y: 55, label: "Git" },
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
              implementing HTML/CSS and Javascript,TypeScript but I'm not limited to it as I'm
              flexiable in switching to other languages.Thus if you desire a skill and passionate 
              developer that is well-grounded and expandable, please contact me for jobs, or projects.
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
