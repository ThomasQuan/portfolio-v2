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
            { y: 80, label: "HTML/CSS" },
            { y: 70, label: "SASS" },
            { y: 60, label: "Java" },
            { y: 60, label: "C#" },
            { y: 70, label: "Python" },
          ],
        },
      ],
    };
    return (
      // <i class="fab fa-react fa-5x"></i>
      // <i class="fab fa-angular fa-5x"></i>
      // <i class="fab fa-android fa-5x"></i>
      // <i class="fab fa-node-js fa-5x"></i>
      // <i class="fab fa-js-square fa-5x"></i>
      // <i class="fab fa-html5 fa-5x"></i>
      // <i class="fab fa-css3 fa-5x"></i>
      // <i class="fab fa-sass fa-5x"></i>
      // <i class="fab fa-docker fa-5x"></i>
      // <i class="fab fa-aws fa-5x"></i>
      // <i class="fab fa-java fa-5x"></i>
      <React.Fragment>
        <div className="skill" id='skill'>
          <div className="skill-desc" data-aos="fade-right">
            <h1>Consider hiring me</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
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
