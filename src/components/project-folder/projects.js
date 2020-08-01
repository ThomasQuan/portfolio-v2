import React, { useState, useEffect } from "react";
import ProjectDetail from "./project-details";
import House from "../../assets/house.jpg";
import GeoTracker from "../../assets/geotracker.jpg";
import Restaurant from "../../assets/restaurant.jpg";
import Chat from "../../assets/chat.jpg";
import Arcade from "../../assets/arcade.jpg";
import HousePrice1 from "../../assets/HousePrice/house-price1.PNG";
import HousePrice2 from "../../assets/HousePrice/house-price2.PNG";
import HousePrice3 from "../../assets/HousePrice/house-price3.PNG";
import HousePrice4 from "../../assets/HousePrice/house-price4.PNG";
import PokemonProject_Img1 from "../../assets/PokemonAnalyst/pokemon-analyst-1.PNG";
import PokemonProject_Img2 from "../../assets/PokemonAnalyst/pokemon-analyst-2.PNG";
import PokemonProject_Img3 from "../../assets/PokemonAnalyst/pokemon-analyst-3.PNG";

import Capstone1 from "../../assets/Capstone/employee-list.PNG";
import Capstone2 from "../../assets/Capstone/employee-management.PNG";
import Capstone3 from "../../assets/Capstone/login.PNG";
import Capstone4 from "../../assets/Capstone/manager-dashboard.PNG";
import Capstone5 from "../../assets/Capstone/work-history.PNG";

import GeoTracker1 from "../../assets/GeoTracker/tracker1.PNG";
import GeoTracker2 from "../../assets/GeoTracker/tracker2.PNG";
import GeoTracker3 from "../../assets/GeoTracker/tracker3.PNG";
import GeoTracker4 from "../../assets/GeoTracker/tracker4.PNG";

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
      backgroundImg: "house-img",
      projectCover: House,
      projectImages: [HousePrice1, HousePrice2, HousePrice3, HousePrice4],
    },
    {
      projectName: "Geo Position Tracking",
      desc:
        "A mobile application builded with android studio via JAVA that provide user the " +
        "ability to track their movement from point A to B and give back a result of their travel such as " +
        "how much miles did they went, or how long did it take..etc by implementing Google Map API " +
        " , and storing thoes statistic in a local database using SQLite Database.",
      stack: ["Android Studio", "Java", "Google Map API", "SQLite Database"],
      projectLink: "https://github.com/tunguyen912/Geotracker_Android",
      backgroundImg: "geotracker-img",
      projectCover: GeoTracker,
      projectImages: [GeoTracker1, GeoTracker2, GeoTracker3, GeoTracker4],
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
      backgroundImg: "capstone-img",
      projectCover: Restaurant,
      projectImages: [Capstone1, Capstone2, Capstone3, Capstone4, Capstone5],
    },
    {
      projectName: "Chat Application",
      desc:
        "Message application builted with Express Node.js and interface of React that provide" +
        " the users the ability to communicated through the internet.",
      stack: ["React", "NodeJS", "Express", "Material UI"],
      projectLink: "https://github.com/tunguyen912/simple_chat_app",
      websiteLink: "https://mernsocketio.herokuapp.com/",
      backgroundImg: "chatapp-img",
      projectCover: Chat,
      projectImages: [],
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
      backgroundImg: "gameroom-img",
      projectCover: Arcade,
      projectImages: [],
    },
    {
      projectName: "Pokemons Analyst ( Beta version )",
      desc:
        "Let Rotom help you build your dream team, select from hundreds of Pokémon’s that has been collected through multiple generation and pick your team to be the very top." +
        "Rotom will help you analyst the team statistic along with move sets, PP, weakness and Pokémon attribute." +
        " Application is still in beta so there is still some functionality that Rotom can't perform yet",
      stack: ["ReactJS", "Axios", "SASS", "ChartJS"],
      projectLink: "https://github.com/ThomasQuan/pokemon-team-analyst",
      websiteLink: "https://rotom-analyst.vercel.app/",
      backgroundImg: "pokemon-theme-img",
      projectCover: Arcade,
      projectImages: [
        PokemonProject_Img1,
        PokemonProject_Img2,
        PokemonProject_Img3,
      ],
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
          {_projects.map((p, idx) => (
            <div key={idx} className={`project ${p.backgroundImg}`}>
              <h1>{p.projectName}</h1>
              <div className="link">
                <ProjectDetail
                  projectName={p.projectName}
                  desc={p.desc}
                  projectCover={p.projectCover}
                  projectImages={p.projectImages}
                  stack={p.stack}
                  projectLink={p.projectLink}
                  websiteLink={p.websiteLink}
                ></ProjectDetail>
              </div>
            </div>
          ))}
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
