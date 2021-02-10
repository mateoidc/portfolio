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
        <div class="container">
          <h5 className="skills">Skills</h5>

          <div class="child">
            <div class="box">
              <img
                class="img"
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
                alt="house"
              />
            </div>

            <div class="box">
              <img
                class="img"
                src="https://blog.canadianwebhosting.com/wp-content/uploads/2018/04/javascript-logo.png"
                alt="house"
              />
            </div>

            <div class="box">
              <img
                class="img"
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                alt="house"
              />
            </div>

            <div class="box">
              <img
                class="img"
                src="https://cdn.iconscout.com/icon/free/png-512/nodejs-226032.png"
                alt="house"
              />
            </div>

            <div class="box">
              <img
                class="img"
                src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png"
                alt="house"
              />
            </div>

            <div class="box">
              <img
                class="img"
                src="https://www.sferalabs.cc/wp-content/uploads/github-logo.png"
                alt="house"
              />
            </div>
          </div>
        </div>

        {/* <div className="dots">
          <span class="dot"></span>
          <span class="dot"></span>

          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div className="yes">
          <h4 class="skills-h4">Skills</h4>

          <div className="skill-pics">
            <div className="skill1"></div>
            <div className="skill2"></div>
            <div className="skill3"></div>
            <div className="skill6"></div>
            <div className="skill4"></div>
            <div className="skill5"></div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Skills;
