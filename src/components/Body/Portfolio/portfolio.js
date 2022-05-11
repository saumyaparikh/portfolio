import React from "react";
import Sage from "./sage.PNG";
import ET from "./expensetracker.png";
import SPD from "./spd.PNG";
import app3Dify from "./3dify.png";
import Separator from "../../separator/separator";
import Skills from "./skills";
import "./portfolio.css";
function Portfolio() {
  return (
    <>
      <Skills />
      <Separator />
      <label className="section-title mx-auto">PROJECTS</label>
      <div className="projects">
        <div class="container ">
          <div class="row align-items-center flex-row-reverse ">
            <div class="col-md-6 proj1">
              <label className="project-title">3Dify</label>
              <div className="project-links">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://drive.google.com/file/d/1fnf2lDkM_AlyXcoi77v-cwXJiorEUbW-/view?usp=sharing"
                >
                  <div className="link-button">
                    <i class="fas fa-globe"></i>
                    <b>Paper</b>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/saumyaparikh/3Dify"
                >
                  <div className="link-button">
                    <i class="fab fa-github"></i>
                    <b>Github</b>
                  </div>
                </a>
              </div>
              <p>
                Created a website where user can convert their StereoImage into
                a 3D Model. Used various OpenCV libraries and techniques to
                generate models. User can visualize the 3D Model using Meshlab
                by importing the output.
              </p>
              <div className="project-tags">
                <label className="tags">HTML</label>
                <label className="tags">CSS</label>
                <label className="tags">Bootstrap</label>
                <label className="tags">React.js</label>
                <label className="tags">Django</label>
                <label className="tags">Pyntcloud</label>
                <label className="tags">OpenCV</label>
                <label className="tags">SQLite</label>
              </div>
            </div>
            <div class="col-md-6">
              <img
                src={app3Dify}
                alt="Project Screenshot"
                className="img"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 proj1">
              <label className="project-title">SAGE</label>
              <div className="project-links">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://sagevaccine.herokuapp.com/"
                >
                  <div className="link-button">
                    <i class="fas fa-globe"></i>
                    <b>Demo</b>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/saumyaparikh/Sage"
                >
                  <div className="link-button">
                    <i class="fab fa-github"></i>
                    <b>Github</b>
                  </div>
                </a>
              </div>
              <div>
                <p>
                  It's a Vaccination website where people can make an
                  appointment for vaccination of their children in a certain
                  area. Here users after login can book appointments for their
                  children in their nearby Hospital. They can sort the hospitals
                  by their price. After booking successfully, they will get an
                  email notification 1 hour before their appointment.
                </p>
              </div>
              <div className="project-tags">
                <label className="tags">HTML</label>
                <label className="tags">CSS</label>
                <label className="tags">Bootstrap</label>
                <label className="tags">Django</label>
                <label className="tags">SQLite</label>
              </div>
            </div>
            <div class="col-md-6">
              <img src={Sage} alt="Project Screenshot" className="img"></img>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="projects">
        <div class="container ">
          <div class="row align-items-center flex-row-reverse ">
            <div class="col-md-6 proj1">
              <label className="project-title">Expense Tracker</label>
              <div className="project-links">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://expensetrackerin.herokuapp.com/"
                >
                  <div className="link-button">
                    <i class="fas fa-globe"></i>
                    <b>Demo</b>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/saumyaparikh/expensetracker"
                >
                  <div className="link-button">
                    <i class="fab fa-github"></i>
                    <b>Github</b>
                  </div>
                </a>
              </div>
              <p>It is an app that helps users to track expenses smartly.</p>
              <div className="project-tags">
                <label className="tags">HTML</label>
                <label className="tags">CSS</label>
                <label className="tags">Bootstrap</label>
                <label className="tags">React.js</label>
              </div>
            </div>
            <div class="col-md-6">
              <img src={ET} alt="Project Screenshot" className="img"></img>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="projects">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 proj1">
              <label className="project-title">SPD</label>
              <div className="project-links">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://showingpandemicdata.herokuapp.com/"
                >
                  <div className="link-button">
                    <i class="fas fa-globe"></i>
                    <b>Demo</b>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/saumyaparikh/SPD"
                >
                  <div className="link-button">
                    <i class="fab fa-github"></i>
                    <b>Github</b>
                  </div>
                </a>
              </div>
              <p>
                Showing Pandemic Data is a Website that shows Live Covid stats
                of India.
              </p>
              <div className="project-tags">
                <label className="tags">HTML</label>
                <label className="tags">CSS</label>
                <label className="tags">Bootstrap</label>
                <label className="tags">React.js</label>
              </div>
            </div>
            <div class="col-md-6">
              <img src={SPD} alt="Project Screenshot" className="img"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
