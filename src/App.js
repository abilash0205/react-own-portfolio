import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import Project from "./Components/Projects";
import Skill from "./Components/Skills";
import Contacts from "./Components/Contacts";
import FooterLinks from "./Components/FooterLinks";
import "./index.css";

const App = () => {
  
  useEffect(() => {
    const bodyEl = document.body;
    const barEl = document.querySelector("#bar");

    const updateBar = () => {
      let scrollBar =
        (window.scrollY / (bodyEl.scrollHeight - window.innerHeight)) * 100;
      barEl.style.width = `${scrollBar}%`;
      requestAnimationFrame(updateBar);
    };
    updateBar();
    return () => cancelAnimationFrame(updateBar);
  }, []);

  return (
    <div>
      {/* ----------  Progress Bar  ---------- */}
      <div className="progress fixed top-0 left-0 z-50 w-full h-1 bg-gray-950">
        <span
          id="bar"
          className="bar block w-0 bg-gradient-to-r from-gray-500 to-gray-700"
        ></span>
      </div>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Project />
      <Skill />
      <Contacts />
      <FooterLinks />
    </div>
  );
};

export default App;