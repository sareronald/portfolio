import React from "react";
import "./style.css";

// Landing Page

function Jumbotron() {
  return (
    <main>
      <header id="landingPage">
        <div className="container-fluid hero-container">
          <div className="info">
            <div className="col-lg-10 align-self-end"></div>
            <div className="col-lg-6 landing-info container text-center">
              <h1 className="text-white font-weight-medium text-center mb-5">
                Full Stack Web Developer
              </h1>
              <hr className="divider my-4" color="#408eff" />
              <p className="text-white-75 font-weight-light mb-5">
                Below are examples of deployed applications that I have
                developed & designed. View the GitHub link or Heroku page for
                further exploration.
              </p>
              <a
                href="#portfolio"
                id="portfolioBtn"
                className="btn btn-lg btn-outline-primarypx-4 js-scroll-trigger"
              >
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}

export default Jumbotron;
