import React from "react";
import Aboutme from "./aboutimage.png";
import "./about.css";
function About() {
  return (
    <div>
      <div className="container about ">
        <div className="row">
          <div className="col-md-6 about-info align-self-center ">
            Hello There 👋, I am
            <br />
            <span className="about-name">Saumya Parikh</span>
            <br />
            <span className="prof">A Full-Stack Developer</span>
          </div>
          <div className="col-md-6 ">
            <img src={Aboutme} alt="Coding Vector" width="100%" height="100%" />
          </div>
        </div>
      </div>
      <div className="container padd" id="aboutme">
        <div className="row   ">
          <div className="col-md-3 about-info align-self-center ">
            <span className="section-title">ABOUT ME</span>
          </div>
          <div className="col-md-9 section-info">
            <p>
              Hello! My name is Saumya Parikh and I'm pursuing a Bachelors's in
              Computer Engineering from Vidyavardhini College of Engineering and
              Technology, Mumbai University.
            </p>
            <p>
              I'm a passionate learner who's always willing to learn and work
              across technologies and domains. I love to explore new
              technologies. I'm currently into Web Development and working on my
              Data Structures and Algorithms
            </p>
            <p>
              My interest in programming started back in 2016 when I had C,
              HTML/CSS in my class XI course. I started following
              web-development tutorials from YouTube, Udemy, Coursera and built
              some projects. Fast-forward to today, I can build a full-stack web
              application.
            </p>
            <p>
              At university, I learnt C++. For competitive programming and
              solving Data Structures - Algorithms problems, I use C++. Besides,
              I know Python, HTML, CSS, JavaScript, Bootstrap, React, Django,
              Git.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
