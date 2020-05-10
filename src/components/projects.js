import React, { Component, useState } from "react";

const Projects = () => {
  const [project, selectProject] = useState();

  const showProjectContent = (project_name) => {
    console.log(`Showing project of ${project_name}`);
  };
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
            <h3
              onClick={() => {
                showProjectContent("house");
              }}
            >
              LEARN MORE
            </h3>
          </div>

          <div className="project geotracker-img">
            <h1>GeoTracker</h1>
            <h3
              onClick={() => {
                showProjectContent("geotracker");
              }}
            >
              LEARN MORE
            </h3>
          </div>

          <div className="break-row"></div>

          <div className="project capstone-img">
            <h1>CAPSTONE PROJECTS</h1>
            <h3
              onClick={() => {
                showProjectContent("capstone");
              }}
            >
              LEARN MORE
            </h3>
          </div>

          <div className="break-row"></div>

          <div className="project chatapp-img">
            <h1>Chat App</h1>
            <h3
              onClick={() => {
                showProjectContent("chatapp");
              }}
            >
              LEARN MORE
            </h3>
          </div>

          <div className="project gameroom-img">
            <h1>Game Lobby Room</h1>
            <h3
              onClick={() => {
                showProjectContent("gameroom");
              }}
            >
              LEARN MORE
            </h3>
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
