import React, { Component } from "react";
import LandingPage from "../src/components/LandingPage/LandingPage";
import NavBar from "../src/components/NavBar/NavBar";
import AboutMe from "../src/components/AboutMe/AboutMe";
import Projects from "../src/components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
