import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import "../styles/pg6.css";

const Pg6 = () => {
  return (
    <div id="pg6">
    <h6 className="title">Drita Skeraj</h6>
    <div className="container">
          <div className="project-info">
            <HiLocationMarker className="logo" />
            <h1>Tourist Guide</h1>
            <p>Java, XML, SQLite</p>
            <p className="in-progress">Finished</p>
          </div>
          <div className="imgs-holder">
          <img src="http://placehold.it/50x50" className="img1" />
          </div>
    </div>
      <div className="icons">
        <a href="https://github.com/DritaSkeraj/" target="_blank">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/dritaskeraj/" target="_blank">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://www.hackerrank.com/dritaskeraj" target="_blank">
          <FaHackerrank className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Pg6;
