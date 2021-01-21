import React from "react";
import "./style.css";

import daybook from "../../assets/images/portfolio/day-scheduler.png";
import pinboard from "../../assets/images/portfolio/pinboard.png";
import notetaker from "../../assets/images/portfolio/notetaker.png";
import burger from "../../assets/images/portfolio/eat-da-burger.png";
import tutor from "../../assets/images/portfolio/tutor.png";
import employee from "../../assets/images/portfolio/employee-directory.png";

function Projects() {
  return (
    <section className="portfolio-section text-center" id="portfolio">
      <div className="container-fluid">
        <h2 className="mt-0 text-center">Portfolio</h2>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="card">
            <div className="card-block">
              <img className="card-img-top" src={daybook} alt="Day Scheduler" />
              <h4 className="card-title">Day Scheduler</h4>
              <p className="card-text p-y-1">
                A simple day calendar application that allows the user to save
                events for each hour of the day in local storage and manage
                their time effectively.
              </p>
              <div className="twoButtons">
                <a
                  href="https://sareronald.github.io/05-hw-work-day-scheduler/"
                  className="btn btn-outline-primary btn-sm"
                  id="deployedApp"
                  role="button"
                >
                  <i className="fa fa-link"></i> Deployed App
                </a>
                <a
                  href="https://github.com/sareronald/05-hw-work-day-scheduler.git"
                  className="btn btn-primary btn-sm"
                  id="githubRepo"
                  role="button"
                >
                  <i className="fa fa-github"></i> Github Repo
                </a>
              </div>
              <div className="builtWith">HTML, CSS, JavaScript, jQuery</div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="card">
            <div className="card-block">
              <img className="card-img-top" src={pinboard} alt="Pinboard" />
              <h4 className="card-title">Pinboard</h4>
              <p className="card-text p-y-1">
                An online school bulletin board that displays year group
                specific information for students and is easy for school admin
                staff to update.
              </p>
              <div className="twoButtons">
                <a
                  href="https://ninetta11.github.io/7-Project-1/"
                  className="btn btn-outline-primary btn-sm"
                  id="deployedApp"
                  role="button"
                >
                  <i className="fa fa-link"></i> Deployed App
                </a>
                <a
                  href="https://github.com/sareronald/7-Project-1.git"
                  className="btn btn-primary btn-sm"
                  id="githubRepo"
                  role="button"
                >
                  <i className="fa fa-github"></i> Github Repo
                </a>
              </div>
              <div className="builtWith">HTML, CSS, JavaScript</div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="card">
            <div className="card-block">
              <img className="card-img-top" src={notetaker} alt="Note Taker" />
              <h4 className="card-title">NoteTaker</h4>
              <p className="card-text p-y-1">blurb to be added here</p>
              <div className="twoButtons">
                <a
                  href="https://ninetta11.github.io/7-Project-1/"
                  className="btn btn-outline-primary btn-sm"
                  id="deployedApp"
                  role="button"
                >
                  <i className="fa fa-link"></i> Deployed App
                </a>
                <a
                  href="https://github.com/sareronald/7-Project-1.git"
                  className="btn btn-primary btn-sm"
                  id="githubRepo"
                  role="button"
                >
                  <i className="fa fa-github"></i> Github Repo
                </a>
              </div>
              <div className="builtWith">HTML, CSS, JavaScript</div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="card">
            <div className="card-block">
              <img className="card-img-top" src={burger} alt="Eat-Da-Burger" />
              <h4 className="card-title">Eat-Da-Burger</h4>
              <p className="card-text p-y-1">
                Burger Logger MVC application that allows users to create
                burgers, view burgers, devour burgers and throw away burgers.
              </p>
              <div className="twoButtons">
                <a
                  href="https://tranquil-woodland-78404.herokuapp.com/"
                  className="btn btn-outline-primary btn-sm"
                  id="deployedApp"
                  role="button"
                >
                  <i className="fa fa-link"></i> Deployed App
                </a>
                <a
                  href="https://github.com/sareronald/13-burger.git"
                  className="btn btn-primary btn-sm"
                  id="githubRepo"
                  role="button"
                >
                  <i className="fa fa-github"></i> Github Repo
                </a>
              </div>
              <div className="builtWith">
                Handlebars, CSS, JavaScript, MySQL, Express{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="card">
            <div className="card-block">
              <img className="card-img-top" src={tutor} alt="Book-A-Tutor" />
              <h4 className="card-title">Book-A-Tutor</h4>
              <p className="card-text p-y-1">
                An online tutoring service that allows students and tutors to
                connect and book a time to meet so that the student can get help
                on a specific topic/subject.
              </p>
              <div className="twoButtons">
                <a
                  href="https://book-a-tutor.herokuapp.com/"
                  className="btn btn-outline-primary btn-sm"
                  id="deployedApp"
                  role="button"
                >
                  <i className="fa fa-link"></i> Deployed App
                </a>
                <a
                  href="https://github.com/sareronald/book-a-tutor.git"
                  className="btn btn-primary btn-sm"
                  id="githubRepo"
                  role="button"
                >
                  <i className="fa fa-github"></i> Github Repo
                </a>
              </div>
              <div className="builtWith">
                Handlebars, CSS, JavaScript, Express.js, Node.js, Sequelize,
                calendar.io
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="card">
            <div className="card-block">
              <img
                className="card-img-top"
                src={employee}
                alt="Employee Directory"
              />
              <h4 className="card-title">Employee Dirctory</h4>
              <p className="card-text p-y-1">add a description here</p>
              <div className="twoButtons">
                <a
                  href="https://sareronald.github.io/19-react-employee-directory/"
                  className="btn btn-outline-primary btn-sm"
                  id="deployedApp"
                  role="button"
                >
                  <i className="fa fa-link"></i> Deployed App
                </a>
                <a
                  href="https://github.com/sareronald/19-react-employee-directory.git"
                  className="btn btn-primary btn-sm"
                  id="githubRepo"
                  role="button"
                >
                  <i className="fa fa-github"></i> Github Repo
                </a>
              </div>
              <div className="builtWith">update the built with...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
