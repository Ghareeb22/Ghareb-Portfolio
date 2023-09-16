import "./ImgStyles.css";

import React from "react";

import introImg from "../assests/intro-bg.jpg";
import { Link } from "react-router-dom";
const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI I AM A FRONT-END DEVELOPER</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
