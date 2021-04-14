import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaHackerrank, FaSpotify } from "react-icons/fa";
import "../styles/pg2.css";
import spotify from "../assets/spotify.png"

const Pg2 = () => {
  return (
    <div id="pg2">
      <h6 className="title">Drita Skeraj</h6>
      <div className="container">
            <div className="project-info">
              <FaSpotify className="logo" />
              <h1>Spotify</h1>
              <p>React, Redux, Node, Express, Mongo, Mongoose</p>
              <p className="in-progress">In progress...</p>
            </div>
            <div className="imgs-holder">
            <img src={spotify} className="img1" />
            </div>
      </div>
      <div className="icons">
        <a href="https://github.com/DritaSkeraj/" target="_blank">
          <FaGithub className="icon2" />
        </a>
        <a href="https://www.linkedin.com/in/dritaskeraj/" target="_blank">
          <FaLinkedin className="icon2" />
        </a>
        <a href="https://www.hackerrank.com/dritaskeraj" target="_blank">
          <FaHackerrank className="icon2" />
        </a>
      </div>
    </div>
  );
};

export default Pg2;
