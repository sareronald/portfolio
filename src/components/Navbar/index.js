import React, { useState, useEffect } from "react";
import "./style.css";

//Navigation

function Navbar() {
  const [header, setHeader] = useState("nav");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("nav");
    } else if (window.scrollY > 100) {
      return setHeader("nav2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className={header}>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#landingPage">
            Sarah Ronald
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            // aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item social">
                <a
                  target="_blank"
                  href="https://twitter.com/home"
                  rel="noreferrer"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item social">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/sarah-ronald-b141b4114"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li className="nav-item social">
                <a
                  target="_blank"
                  href="https://github.com/sareronald?tab=repositories"
                  rel="noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
