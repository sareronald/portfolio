import React from "react";
import "./style.css";
import profilepic from "../../assets/images/profileSR.jpg";

// About Me

function About() {
  return (
    <section className="page-section-about" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <img src={profilepic} alt="profilepic" className="profile-image" />
            <h2 className="text-center mt-0">About Me</h2>
            <hr className="divider my-4" color="#408eff" />
            <p className="text-muted mb-0">
              Sarah Ronald is a Full-Stack Developer, with a background in Art,
              Design and Tech education. Obtained a certificate inFull-Stack
              Development through Trilogy Education at the University of Sydney
              in 2020.
            </p>
            <br />
            <p className="text-muted mb-0">
              Well-organised, problem solver, independent employee with an eye
              for detail. Experienced in front and back end technologies such as
              HTML, CSS, JavaScript, SQL, React.js, jQuery, Bootstrap, MongoDB,
              Node.js, Express and Handlebars.
            </p>
            <p></p>
            <div className="aboutMeButtons">
              <a
                href="https://docs.google.com/document/d/1E2DPQymZ3fUNxfSIbwAl5Kdms0XTBKh4ma2C4fYcTxw/edit?usp=sharing"
                className="btn btn-outline-primary aboutMeButtons"
                id="viewResume"
                role="button"
              >
                View Resume
              </a>
              <a
                href="https://github.com/sareronald"
                className="btn btn-primary aboutMeButtons"
                id="githubRepo"
                role="button"
              >
                <i className="fa fa-github"></i> Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
