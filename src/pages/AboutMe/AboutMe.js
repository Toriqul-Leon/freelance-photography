import React from "react";
import "./AboutMe.css";
import myself from "../../images/myself.jpg";
const AboutMe = () => {
  return (
    <div className="aboutMe-container">
      <div className="aboutMe">
        {" "}
        <img src={myself} alt="" />
        <p className="">
          My name is <strong>Toriqul Islam Leon</strong>, I'm currently pursuing
          a BSc in Computer Science. I want to finish it properly before
          searching for employment. And, yes, in the midst of all of this, I'd
          like to learn web development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
