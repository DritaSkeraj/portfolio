import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import "../styles/pg3.css";
import linkedin from "../assets/linkedin.png";

const Pg3 = () => {

  return (
    <div id="pg3">
      <h6 className="title">Drita Skeraj</h6>
      <div className="container">
            <div className="project-info">
              <FaLinkedin className="logo" style={{"color": "#00D682"}}/>
              <h1>Linkedin</h1>
              <p>React.js</p>
              <p className="in-progress">In progress...</p>
            </div>
            <div className="imgs-holder">
            <img src={linkedin} className="img1" />
            </div>
      </div>
      <div className="icons">
        <a href="https://github.com/DritaSkeraj/" target="_blank">
          <FaGithub className="icon3"/>
        </a>
        <a href="https://www.linkedin.com/in/dritaskeraj/" target="_blank">
          <FaLinkedin className="icon3"/>
        </a>
        <a href="https://www.hackerrank.com/dritaskeraj" target="_blank">
          <FaHackerrank className="icon3"/>
        </a>
      </div>
    </div>
  );
};

export default Pg3;
