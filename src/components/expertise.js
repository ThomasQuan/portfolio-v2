import React, { Component } from "react";
import { ReactComponent as JS } from "../assets/svg/javascript.svg";
import { ReactComponent as JQuery } from "../assets/svg/jquery.svg";
import { ReactComponent as Angular } from "../assets/svg/angular.svg";
import { ReactComponent as Sass } from "../assets/svg/sass.svg";
import { ReactComponent as Bootstrap } from "../assets/svg/bootstrap-4.svg";
import { ReactComponent as ReactLogo } from "../assets/svg/react.svg";
import { ReactComponent as MySQL } from "../assets/svg/mysql.svg";
import { ReactComponent as MongoDB } from "../assets/svg/mongodb.svg";
import { ReactComponent as NodeJS } from "../assets/svg/nodejs.svg";
import { ReactComponent as SocketIO } from "../assets/svg/socket-io.svg";
import { ReactComponent as JWT } from "../assets/svg/jwt.svg";
import { ReactComponent as GraphQL } from "../assets/svg/graphql.svg";
import { ReactComponent as MaterialUI } from "../assets/svg/material-ui.svg";
import { ReactComponent as Git } from "../assets/svg/git.svg";
import { ReactComponent as Figma } from "../assets/svg/figma.svg";
import { ReactComponent as Trello } from "../assets/svg/trello.svg";
import { ReactComponent as Jira } from "../assets/svg/jira.svg";
import { ReactComponent as Photoshop } from "../assets/svg/photoshop-cc.svg";

class Expertise extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="skill" id="skill">
          <div className="skill-header">
            <h1>TECHNOLOGY</h1>
            <h3>Programming Languages, Framework &amp; Library, Tools</h3>
          </div>
          <div className="skill-desc-container">
            <div className="skill-desc-container-content" style={{backgroundColor : "#d8b26e"}}>
              <h1>FRONT END</h1>
              <div className="skill-desc-container-content-svg-container">
                <div>
                  <JS className="svg-logo" />
                  <p> JavaScript </p>
                </div>
                <div>
                  <JQuery className="svg-logo" />
                  <p> jQuerry </p>
                </div>
                <div>
                  <Angular className="svg-logo" />
                  <p> Angular</p>
                </div>
                <div>
                  <Sass className="svg-logo" />
                  <p> Sasss</p>
                </div>
                <div>
                  <Bootstrap className="svg-logo" />
                  <p> Bootstrap</p>
                </div>
                <div>
                  <ReactLogo className="svg-logo" />
                  <p> React</p>
                </div>
                <div>
                  <MaterialUI className="svg-logo" />
                  <p> Material UI</p>
                </div>
              </div>
            </div>
            <div className="skill-desc-container-content" style={{backgroundColor : "#b477759c"}}>
              <h1>BACK END</h1>
              <div className="skill-desc-container-content-svg-container">
                <div>
                  <MySQL className="svg-logo" />
                  <p> mySQL</p>
                </div>
                <div>
                  <MongoDB className="svg-logo" />
                  <p> MongoDB</p>
                </div>
                <div>
                  <NodeJS className="svg-logo" />
                  <p> NodeJS</p>
                </div>
                <div>
                  <SocketIO className="svg-logo" />
                  <p> SocketIO</p>
                </div>
                <div>
                  <JWT className="svg-logo" />
                  <p> JWT</p>
                </div>
                <div>
                  <GraphQL className="svg-logo" />
                  <p> GraphQL (Learning)</p>
                </div>
              </div>
            </div>
            <div className="skill-desc-container-content" style={{backgroundColor : "#dfdbd8"}}>
              <h1>TOOLS</h1>
              <div className="skill-desc-container-content-svg-container">
                <div>
                  <Git className="svg-logo" />
                  <p> Git</p>
                </div>
                <div>
                  <Figma className="svg-logo" />
                  <p> Figma</p>
                </div>
                <div>
                  <Trello className="svg-logo" />
                  <p> Trello</p>
                </div>
                <div>
                  <Jira className="svg-logo" />
                  <p> Jira</p>
                </div>
                <div>
                  <Photoshop className="svg-logo" />
                  <p> Photoshop (Learning)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Expertise;
