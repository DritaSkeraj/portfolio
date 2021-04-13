import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import {BsFillMusicPlayerFill} from "react-icons/bs";
import "../styles/pg5.css";
import allPlaylists from "../assets/allplaylists.png";

const Pg5 = () => {

  return (
    <div id="pg5">
      <h6 className="title">Drita Skeraj</h6>
      <div className="container">
            <div className="project-info">
              <BsFillMusicPlayerFill className="logo" />
              <h1>All playlists</h1>
              <p>React, Redux, Hooks, Node, Express, Mongo, Mongoose</p>
              <p className="in-progress">In progress...</p>
            </div>
            <div className="imgs-holder">
            <img src={allPlaylists} className="img1" />
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

export default Pg5;
