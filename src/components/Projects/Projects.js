import React, { Component } from "react";
import "../Projects/Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="Projects">
        <h3 className="take-a-look">
          Take a <strong className="look">look</strong> at some of my work!
        </h3>
        <div className="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div className="projects-container">
          <div id="wrapper">
            <div className="hero-image1">
              <div className="button-wrapper">
                <button className="github1">Github</button>
                <button className="live1">Live </button>
              </div>
            </div>
          </div>

          <div id="wrapper">
            <div className="hero-image2">
              <div className="button-wrapper">
                <button className="github1">Github</button>
                <button className="live1">Live </button>
              </div>
            </div>
          </div>

          <div id="wrapper">
            <div className="hero-image4">
              <div className="button-wrapper">
                <button className="github1">Github</button>
                <button className="live1">Live </button>
              </div>
            </div>
          </div>

          <div id="wrapper">
            <div className="hero-image3">
              <div className="button-wrapper">
                <button className="github1">Github</button>
                <button className="live1">Live </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
