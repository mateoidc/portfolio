import React, { Component } from "react";
import "../Projects/Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div id="projects" className="Projects">
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
                <a
                  target="_blank"
                  href="https://github.com/mateoidc/ecommerce-react"
                >
                  <button className="github1">Github</button>
                </a>

                <a target="_blank" href="https://stayandvacay.netlify.app/">
                  <button className="github1">Live</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-names">
            <span class="dot"></span> Ecommerce APP<span class="dot"></span>
          </div>
          <div id="wrapper">
            <div className="hero-image-semantic">
              <div className="button-wrapper">
                <a
                  target="_blank"
                  href="https://github.com/RobLazCDMX/Hope-Hackathon
                  "
                >
                  <button className="github1">Github</button>
                </a>
              </div>
            </div>
          </div>
          {/* Plants Ecommerce */}
          <div className="project-names">
            <span class="dot"></span> Hackathon<span class="dot"></span>
          </div>
          <div id="wrapper">
            <div className="hero-image-plants">
              <div className="button-wrapper">
                <a
                  target="_blank"
                  href="https://github.com/RobLazCDMX/Hope-Hackathon
                  "
                >
                  <button className="github1">Github</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-names">
            <span class="dot"></span> Plants Ecommerce<span class="dot"></span>
          </div>
          <div id="wrapper">
            <div className="hero-image3">
              <div className="button-wrapper">
                <a
                  target="_blank"
                  href="https://github.com/mateoidc/weather-app
                  "
                >
                  <button className="github1">Github</button>
                </a>

                <a target="_blank" href="https://mateosweather.netlify.app/">
                  <button className="github1">Live</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-names">
            <span class="dot"></span> Weather APP<span class="dot"></span>
          </div>
          <div id="wrapper">
            <div className="hero-image2">
              <div className="button-wrapper">
                <a
                  target="_blank"
                  href="https://github.com/RobLazCDMX/Hope-Hackathon
                  "
                >
                  <button className="github1">Github</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-names">
            <span class="dot"></span> Covid tracker<span class="dot"></span>
          </div>
          <div id="wrapper">
            <div className="hero-image4">
              <div className="button-wrapper">
                <a
                  target="_blank"
                  href="https://github.com/mateoidc/studioghibli
                  "
                >
                  <button className="github1">Github</button>
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="project-names">
            <span class="dot"></span> Movie Tracker
            <span class="dot"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
