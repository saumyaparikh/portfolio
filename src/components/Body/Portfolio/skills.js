import React from "react";
import Separator from "../../separator/separator";
import "./skills.css";
function Skills() {
  return (
    <div>
      <Separator />
      <label className="section-title mx-auto">SKILLS</label>
      <div class="container skill-card mx-auto ">
        <div class="row row-cols-auto">
          <div class="col my-2">
            <i
              class="skill-icon devicon-cplusplus-plain colored"
              title="C++"
            ></i>
          </div>
          <div class="col my-2">
            <i
              class="skill-icon  devicon-python-plain colored"
              title="Python"
            ></i>
          </div>
          <div class="col my-2">
            <i class="skill-icon  devicon-html5-plain colored" title="HTML"></i>
          </div>
          <div class="col my-2">
            <i class="skill-icon devicon-css3-plain colored" title="CSS"></i>
          </div>
          {/* <div class="row"> */}
          <div class="col my-2">
            <i
              class="skill-icon devicon-bootstrap-plain colored"
              title="Bootstrap"
            ></i>
          </div>
          <div class="col my-2">
            <i
              class="skill-icon devicon-javascript-plain colored"
              title="JavaScript"
            ></i>
          </div>
          <div class="col my-2">
            <i
              class="skill-icon devicon-react-original colored"
              title="React.js"
            ></i>
          </div>
          <div class="col my-2">
            <i
              class="skill-icon devicon-django-plain colored"
              title="Django"
            ></i>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* <div className="skill-card mx-auto">
        <i class="skill-icon devicon-cplusplus-plain colored"></i>
        <i class="skill-icon  devicon-python-plain colored"></i>
        <i class="skill-icon  devicon-html5-plain colored"></i>
        <i class="skill-icon devicon-css3-plain colored"></i>
        <i class="skill-icon devicon-bootstrap-plain colored"></i>
        <i class="skill-icon devicon-javascript-plain colored"></i>
        <i class="skill-icon devicon-react-original colored"></i>
        <i class="skill-icon devicon-django-plain colored"></i>
      </div> */}
    </div>
  );
}

export default Skills;
