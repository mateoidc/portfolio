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
                src="https://lh3.googleusercontent.com/proxy/UlOdjB3JzbdDTz2ydLtrI6mV96ydJX1mTMcVfzY3vgTb8VQfPmtT_PK9jTu3oZMh2GqBYhYHdOQXjzRgL5qlz17qA1CNX1zvPVSMNkrVKj9jt4LoaqLnusw"
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
                src="https://miro.medium.com/max/2625/1*CGdYTKvYr_wvrsWbVVE2Hg.jpeg"
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
