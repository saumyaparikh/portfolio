import React from "react";
import "./body.css";
import About from "./About/about";
import Contact from "./Contact/contact";
import Portfolio from "./Portfolio/portfolio";
function Body() {
  return (
    <>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Body;
