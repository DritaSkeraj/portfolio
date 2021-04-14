import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import "../styles/pg7.css";

const Pg7 = () => {

  return (
    <div id="pg7">
      <h6 className="title">Drita Skeraj</h6>
      <h1>Contact:</h1>
      <p className="email">Email: dritaskeraj@gmail.com</p>
      <div className="">
        <a href="https://github.com/DritaSkeraj/" target="_blank">
          <FaGithub className="icon7"/>
        </a>
        <a href="https://www.linkedin.com/in/dritaskeraj/" target="_blank">
          <FaLinkedin className="icon7"/>
        </a>
        <a href="https://www.hackerrank.com/dritaskeraj" target="_blank">
          <FaHackerrank className="icon7"/>
        </a>
      </div>
    </div>
  );
};

export default Pg7;
