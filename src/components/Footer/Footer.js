import React, { Component } from "react";
import "../Footer/Footer.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="footer">
        <h2 className="h2-footer">
          Let's connect<br></br> <strong>Digitally</strong>
          <br></br>{" "}
          <strong className="mateo2">
            {" "}
            2021 Mateo <strong>Ospina</strong> &#169;
          </strong>
        </h2>
        <ul>
          <li>Email</li>
          <li>Linkedin</li>
          <li>Github</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
