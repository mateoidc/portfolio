import React, { Component } from "react";
import "../AboutMe/AboutMe.css";

class AboutMe extends React.Component {
  render() {
    return (
      <div id="aboutme" className="h2-title">
        <h2 className="h2"> About Me</h2>
        <div className="about-me">
          <div className="hero-image">
            <div className="middle">
              <div className="text">
                Hey there, my name is Mateo Ospina and I am a software developer
                based in Charlotte, NC. I enjoy being able to incorporate my
                creativness into my software applications.
              </div>
            </div>
          </div>
        </div>
        <div className="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    );
  }
}

export default AboutMe;
