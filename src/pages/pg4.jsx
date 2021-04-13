import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import {IoIosSunny} from "react-icons/io"
import "../styles/pg4.css";

const Pg4 = () => {

  return (
    <div id="pg4">
      <h6 className="title">Drita Skeraj</h6>
      <div className="container">
            <div className="project-info">
              <IoIosSunny className="logo" />
              <h1>Weather App</h1>
              <p>React, Redux, Hooks, Typescript</p>
              <p className="in-progress">In progress...</p>
            </div>
            <div className="imgs-holder">
            <img src="http://placehold.it/50x50" className="img1" />
            </div>
      </div>
      <div className="icons">
        <a href="https://github.com/DritaSkeraj/" target="_blank">
          <FaGithub className="icon"/>
        </a>
        <a href="https://www.linkedin.com/in/dritaskeraj/" target="_blank">
          <FaLinkedin className="icon"/>
        </a>
        <a href="https://www.hackerrank.com/dritaskeraj" target="_blank">
          <FaHackerrank className="icon"/>
        </a>
      </div>
    </div>
  );
};

export default Pg4;
