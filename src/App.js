import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/navbar";
import Home from "./components/home";
import AboutMe from "./components/aboutme";
import Expertise from "./components/expertise";
import Projects from "./components/project-folder/projects";
import Contact from "./components/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/notfound";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
            <NavBar></NavBar>
            <AboutMe></AboutMe>
            <Expertise></Expertise>
            <Projects></Projects>
            <Contact></Contact>
          </Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
