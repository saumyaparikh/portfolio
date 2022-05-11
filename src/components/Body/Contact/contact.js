import React from "react";
import "./contact.css";
import Separator from "../../separator/separator";
function Contact() {
  return (
    <>
      <Separator />
      <label className="section-title mx-auto cont">CONTACT</label>
      <div className="contantdetail">
        <p>
          Want to discuss something or just want to say hi? <br></br>My inbox is
          open for all
        </p>
      </div>
      <a
        className="emailup"
        target="_top"
        rel="noreferrer noopener"
        href="mailto:saumyaparikh10@gmail.com"
      >
        <b className="email">saumyaparikh10@gmail.com</b>
      </a>

      <div className="socialimg">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/saumyaparikh"
        >
          <i className="img fab fa-github fa-2x"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/saumyaparikh/"
        >
          <i className="img fab fa-linkedin-in fa-2x"></i>
        </a>
      </div>
    </>
  );
}

export default Contact;
