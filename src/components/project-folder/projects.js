import React, { useState, useEffect } from "react";
import House from "../../assets/house.jpg";
import GeoTracker from "../../assets/geotracker.jpg";
import Restaurant from "../../assets/restaurant.jpg";
import Chat from "../../assets/chat.jpg";
import Arcade from "../../assets/arcade.jpg";

const Projects = () => {
  const [_projects, setProject] = useState([
    {
      projectName: "Ontario House Price Analyst",
      link: "https://github.com/ThomasQuan/ontario-house-price-analysing",
      backgroundImg: "house-img",
    },
    {
      projectName: "Geo Position Tracking",
      link: "https://github.com/tunguyen912/Geotracker_Android",
      backgroundImg: "geotracker-img",
    },
    {
      projectName: "Restaurant Management System",
      link: "https://github.com/tylrtnguyen/CapstoneProject",
      backgroundImg: "capstone-img",
    },
    {
      projectName: "Chat Application",
      link: "https://mernsocketio.herokuapp.com/",
      backgroundImg: "chatapp-img",
    },
    {
      projectName: "Arcade Lobby Room",

      link: "https://powerful-spire-77739.herokuapp.com/home",
      backgroundImg: "gameroom-img",
    },
    {
      projectName: "Pokemons Analyst ( Beta version )",

      link: "https://rotom-analyst.vercel.app/",
      backgroundImg: "pokemon-theme-img",
    },
    {
      projectName: "Glaukopis Wisdom Business Website",
      link: "https://glaukopis-wisdom.vercel.app/",
      backgroundImg: "glaukopis-theme-img",
    },
  ]);

  const visitPage = (link) => {
    window.location.href = link;
  };
  return (
    <React.Fragment>
      <div className="projects" id="projects">
        <div className="projects-container">
          {_projects.map((p, idx) => (
            <div key={idx} className={`project ${p.backgroundImg}`}>
              <h1>{p.projectName}</h1>
              <div className="link">
                <button
                  onClick={() => {
                    visitPage(p.link);
                  }}
                >
                  Visit page
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-title">
          <h1>PROJECTS</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
