import React, { Component } from "react";
import "../Footer/Footer.css";

class NavBar extends React.Component {
  render() {
    return (
      <div id="contact" className="footer">
        <h2 className="h2-footer">
          Let's connect<br></br> <strong>Digitally</strong>
          <br></br>{" "}
          <strong className="mateo2">
            {" "}
            2021 Mateo <strong>Ospina</strong> &#169;
          </strong>
        </h2>
        <ul>
          <a className="alink" href="mailto: mateoidc@gmail.com">
            <li>Email</li>
          </a>
          <a
            className="alink"
            target="_blank"
            href="https://www.linkedin.com/in/mateoospina/"
          >
            <li>Linkedin</li>
          </a>
          <a
            className="alink"
            target="_blank"
            href="https://github.com/mateoidc"
          >
            <li>GitHub</li>
          </a>
        </ul>
      </div>
    );
  }
}

export default NavBar;
