import React, { Component } from "react";
import "../NavBar/NavBar.css";
import { Link } from "react-scroll";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
        <label for="toggle">&#9776;</label>
        <div className="mateo">
          <Link
            activeClass="active"
            to="lp"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {" "}
            Mateo<strong>Ospina</strong>
          </Link>
        </div>
        <input type="checkbox" id="toggle" />

        <div className="menu">
          <a href="#">
            <Link
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <strong>A</strong>bout
            </Link>
          </a>
          <a href="#">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <strong>P</strong>rojects
            </Link>
          </a>
          <a href="#">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <strong>C</strong>ontact
            </Link>
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
