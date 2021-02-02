import React, { Component } from "react";
import "../NavBar/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
        <label for="toggle">&#9776;</label>
        <div className="mateo">
          Mateo <strong>Ospina</strong>
        </div>
        <input type="checkbox" id="toggle" />

        <div className="menu">
          <a href="#">
            <strong>A</strong>bout
          </a>
          <a href="#">
            <strong>P</strong>rojects
          </a>
          <a href="#">
            <strong>C</strong>ontact
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
