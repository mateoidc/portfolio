import React, { Component } from "react";
import "../Skills/Skills.css";

class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <div className="dots">
          <span class="dot"></span>
          <span class="dot"></span>

          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div className="yes">
          <h4 class="skills-h4">Skills</h4>

          {/* Images */}

          <div className="skill-pics">
            <div className="skill1"></div>
            <div className="skill2"></div>
            <div className="skill3"></div>
            <div className="skill6"></div>
            <div className="skill4"></div>
            <div className="skill5"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
