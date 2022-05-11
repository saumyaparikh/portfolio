import React from "react";
import "./header.css";
function Header() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand mx-5">
            <b>
              <span className="navlogo">100</span>म्य
            </b>
          </div>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-md-end "
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center ">
              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#aboutme"
                >
                  About
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  className="nav-link active"
                  aria-current="page"
                  href="https://drive.google.com/file/d/1sLjIYtfCnJHAmLSScPZUZf5LLjXBQP-C/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
