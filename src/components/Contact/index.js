import React from "react";
import "./style.css";

function Contact() {
  return (
    <section className="page-section-contact" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h2 className="mt-0">Contact</h2>
              <hr className="divider my-4" />
              <a href="mailto:sareronald@hotmail.com">
                <i className="fa fa-envelope icon"></i>
              </a>
              <p>
                <a href="mailto:sareronald@hotmail.com">
                  sareronald@hotmail.com
                </a>
              </p>
              <p class="instructions">
                Please send me an email or fill in the form below specifying
                your enquiry.
              </p>
              <br />
            </div>
            <div>
              <form>
                <div class="form-group align">
                  <label for="formGroupExampleInput">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group align">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group align">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Write your message here"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="
                    btn
                    btn-outline-primary
                    btn-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
