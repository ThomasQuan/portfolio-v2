import React, { useEffect } from "react";
import NavBar from "./components/navbar";
import Home from "./components/home";
import AboutMe from "./components/aboutme";
import Expertise from "./components/expertise";
import Projects from "./components/projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.scss";

function App() {
  useEffect(() => {
    AOS.init({
      duration:2000
    });
  }, [])
  return (
    <div className="App">
      <Home></Home>
      <NavBar ></NavBar>
      <AboutMe ></AboutMe>
      <Expertise></Expertise>
      <Projects></Projects>
    </div>
  );
}

export default App;
