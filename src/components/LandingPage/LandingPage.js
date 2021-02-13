import React, { Component } from "react";
import "../LandingPage/LandingPage.css";
import { Link } from "react-scroll";

class LandingPage extends React.Component {
  render() {
    return (
      <div id="lp" className="landing-page">
        <h1>Designing experiences for purpose driven brands</h1>
        <button class="home-page-button">
          <Link
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Learn More
          </Link>
        </button>
      </div>
    );
  }
}

export default LandingPage;
