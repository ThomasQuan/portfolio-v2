import React, { Component, useState } from "react";
import ProjectDetail from "./project-details";
import House from "../assets/house.jpg";
import GeoTracker from "../assets/geotracker.jpg";
import Restaurant from "../assets/restaurant.jpg";
import Chat from "../assets/chat.jpg";
import Arcade from "../assets/arcade.jpg";

const Projects = () => {
  const [_projects, setProject] = useState([
    {
      projectName: "Ontario House Price Analyst",
      desc:
        "This Project is aim at predicting the property types in Ontario with precise accuracy of around 90% " +
        "based on input such as street address, location, room type,...etc and feeding those" +
        " data into neural network.",
      stack: ["Python", "Google Collab", "Numpy", "Pandas"],
      projectLink:
        "https://github.com/ThomasQuan/ontario-house-price-analysing",
    },
    {
      projectName: "Geo Tracker",
      desc:
        "A mobile application builded with android studio via JAVA that provide user the " +
        "ability to track their movement from point A to B and give back a result of their travel such as " +
        "how much miles did they went, or how long did it take..etc by implementing Google Map API " +
        " , and storing thoes statistic in a local database using SQLite Database.",
      stack: ["Android Studio", "Java", "Google Map API", "SQLite Database"],
      projectLink: "https://github.com/tunguyen912/Geotracker_Android",
    },
    {
      projectName: "Restaurant Management System",
      desc:
        "An application is to help manager and it employee better manage" +
        " their resources which include employees, inventories, schedules, and sales." +
        " The perk of this application is that it support all platform from web browser " +
        " to mobile device for both IOS and Android" +
        " using Angular as base for web browsers and NativeScript for mobile devices.",
      stack: ["Angular", "NativeScript", "MongoDB", "Express", "NodeJS"],
      projectLink: "https://github.com/tylrtnguyen/CapstoneProject",
    },
    {
      projectName: "Chat Application",
      desc:
        "Message application builted with Express Node.js and interface of React that provide" +
        " the users the ability to communicated through the internet.",
      stack: ["React", "NodeJS", "Express", "Material UI"],
      projectLink: "https://github.com/tunguyen912/simple_chat_app",
      websiteLink: "https://mernsocketio.herokuapp.com/",
    },
    {
      projectName: "Arcade Lobby Room",
      desc:
        "An application created with Angular Full Stack MEAN with the task to help administrator " +
        " manage their game room which has been created or creat one. User can also join the room " +
        " which was created by admin to play with other player.",
      stack: ["Angular", "MongoDB", "Express", "NodeJS"],
      projectLink: "https://github.com/ThomasQuan/MEAN_GAME_LOBBY",
      websiteLink: "https://powerful-spire-77739.herokuapp.com/home",
    },
  ]);
  return (
    <React.Fragment>
      <div className="projects" id="projects">
        <div
          className="projects-container"
          data-aos="zoom-in-left"
          data-aos-duration="750"
        >
          <div className="project house-img">
            <h1>Ontario House Price Analyst</h1>
            <div className="link">
              <ProjectDetail
                projectName={_projects[0].projectName}
                desc={_projects[0].desc}
                img={House}
                stack={_projects[0].stack}
                projectLink={_projects[0].projectLink}
                websiteLink={_projects[0].websiteLink}
              ></ProjectDetail>
            </div>
          </div>
          <div className="project geotracker-img">
            <h1>GeoTracker</h1>
            <div className="link">
              <ProjectDetail
                projectName={_projects[1].projectName}
                desc={_projects[1].desc}
                img={GeoTracker}
                stack={_projects[1].stack}
                projectLink={_projects[1].projectLink}
                websiteLink={_projects[1].websiteLink}

              ></ProjectDetail>
            </div>
          </div>

          <div className="break-row"></div>

          <div className="project capstone-img">
            <h1>CAPSTONE PROJECTS</h1>
            <div className="link">
              <ProjectDetail
                projectName={_projects[2].projectName}
                desc={_projects[2].desc}
                img={Restaurant}
                stack={_projects[2].stack}
                projectLink={_projects[2].projectLink}
                websiteLink={_projects[2].websiteLink}

              ></ProjectDetail>
            </div>
          </div>

          <div className="break-row"></div>

          <div className="project chatapp-img">
            <h1>Chat App</h1>
            <div className="link">
              <ProjectDetail
                projectName={_projects[3].projectName}
                desc={_projects[3].desc}
                img={Chat}
                stack={_projects[3].stack}
                projectLink={_projects[3].projectLink}
                websiteLink={_projects[3].websiteLink}

              ></ProjectDetail>
            </div>
          </div>

          <div className="project gameroom-img">
            <h1>Arcade Lobby Room</h1>
            <div className="link">
              <ProjectDetail
                projectName={_projects[4].projectName}
                desc={_projects[4].desc}
                img={Arcade}
                stack={_projects[4].stack}
                projectLink={_projects[4].projectLink}
                websiteLink={_projects[4].websiteLink}
              ></ProjectDetail>
            </div>
          </div>
        </div>
        <div
          className="projects-title"
          data-aos="zoom-in-right"
          data-aos-duration="750"
        >
          <h1>Projects</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
