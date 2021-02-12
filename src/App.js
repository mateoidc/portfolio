import React, { Component } from "react";
import LandingPage from "../src/components/LandingPage/LandingPage";
import NavBar from "../src/components/NavBar/NavBar";
import AboutMe from "../src/components/AboutMe/AboutMe";
import Projects from "../src/components/Projects/Projects";
import Skills from "../src/components/Skills/Skills";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
