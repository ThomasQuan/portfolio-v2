import React, { useState } from "react";

const Projects = () => {
  const [_projects, setProject] = useState([
    {
      projectName: "Ontario House Price Analyst",
      link: "https://github.com/ThomasQuan/ontario-house-price-analysing",
      backgroundImg: "house-img",
      desc:
        "Visualize tool used to help list the prices and properties of Toronto real estate",
        
    },
    {
      projectName: "Glaukopis Wisdom Business Website",
      link: "https://glaukopis-wisdom.vercel.app/",
      backgroundImg: "glaukopis-theme-img",
      desc:
        "A curated library of learning materials, job postings, and dedicated networking communities - All within a single sources!",
    },
    {
      projectName: "Pokemons Analyst ( Beta version )",

      link: "https://rotom-analyst.vercel.app/",
      backgroundImg: "pokemon-theme-img",
      desc:
        "Build your Pokémon’s team and analyze them to bring you a better result, experience in the battle",
    },
    {
      projectName: "Restaurant Management System",
      link: "https://github.com/tylrtnguyen/CapstoneProject",
      backgroundImg: "capstone-img",
      desc:
        "Platform that is build for both mobile and web to help manage employees, schedules, revenues, and inventories",
    },
    {
      projectName: "Geo Position Tracking",
      link: "https://github.com/tunguyen912/Geotracker_Android",
      backgroundImg: "geotracker-img",
      desc:
        "Android mobile application that help you track your progress from point A to point B",
    },
    {
      projectName: "Chat Application",
      link: "https://mernsocketio.herokuapp.com/",
      backgroundImg: "chatapp-img",
      desc:
        "A MERN stack application providing communication between users and content management by Admin",
    },
    {
      projectName: "Arcade Lobby Room",
      link: "https://powerful-spire-77739.herokuapp.com/home",
      backgroundImg: "gameroom-img",
      desc:
        "Arcade lobby for game enthusiastic  to join and play their favorite games ",
    },
  ]);


  
  const visitPage = (link) => {
    window.location.href = link;
  };
  return (
    <React.Fragment>
      <div className="projects" id="projects">
        <h1>PROJECTS</h1>
        <h4>
          Here are some of my projects that I have had the chance to work on
        </h4>
        <div className="projects-container">
          {_projects.map((p, idx) => (
            <div data-aos-delay='' key={idx} className={`project ${p.backgroundImg}`}>
              <div className="link">
                <h4>{p.desc}</h4>
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
      </div>
    </React.Fragment>
  );
};

export default Projects;
