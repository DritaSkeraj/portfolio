import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import "../styles/pg1.css";

const Pg1 = () => {
  let [greet, setGreet] = useState("Hello");
  const greets = [
    "Hello",
    "Përshëndetje",
    "Ciao",
    "Merhaba",
    "Hola",
    "Bonjour",
    "Hallo",
    "Olá",
    "Asalaam alaikum",
    "Yassou",
    "Witaj",
    "Namaste",
    "Shalom",
  ];

  return (
    <div id="pg1">
      <h6 className="title">Drita Skeraj</h6>
      <div className="about">
        <h1>Hello!</h1>
        <p>I'm Drita, a full-stack developer.</p>
        <p>
          Graduated from{" "}
          <a href="https://uni-prizren.com/" target="_blank">
            University of Prizren
          </a>{" "}
          and{" "}
          <a href="https://strive.school/" target="_blank">
            Strive School
          </a>
          .
        </p>
        <p>
          Knowledge on:{" "}
          <p className="mern">MERN ( mongo+express+react+node ),</p>
          <p className="small">
            <em>also some SQL, Java, Android.</em>
          </p>
        </p>
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

export default Pg1;
