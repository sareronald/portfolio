import React from "react";
import "./style.css";

function Contact() {
  return (
    <section className="page-section-contact" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">Contact</h2>
            <hr className="divider my-4" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center mb-3 mb-lg-0">
            <a
              href="https://github.com/sareronald"
              target="_blank"
              rel="noreferrer"
              className="links"
            >
              <i className="fa fa-github icon"></i>
            </a>
            <br />
            <a
              href="https://github.com/sareronald"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <a href="mailto:sareronald@hotmail.com">
              <i className="fa fa-envelope icon"></i>
            </a>
            <a className="d-block" href="mailto:sareronald@hotmail.com">
              sareronald@hotmail.com
            </a>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <a
              href="https://www.linkedin.com/in/sarah-ronald-b141b4114/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin icon"></i>
            </a>
            <br />
            <a href="https://www.linkedin.com/in/sarah-ronald-b141b4114/">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
