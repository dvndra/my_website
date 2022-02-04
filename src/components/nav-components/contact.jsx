import React, { Component } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div id="mainContact" className="container-fluid m-0 pt-3 pb-5">
        <div className="row map mx-5 px-5 my-5">
          <div className="col-md-8 mx-auto">
            <div className="card border-0 mx-2">
              <img
                className="card-img-top"
                src={"https://miro.medium.com/max/1838/0*ePzVZr7I9DP8fw4N."}
                alt=""
              />
              <div className="card-body p-2">
                <h5 id="thanksBody" className="card-title my-1">
                  Thank you for going through my work.
                  <br /> If you want to have a discussion, feel free to reach
                  out to me.
                  <div className="row my-3 mx-auto">
                    <div className="col-md-6 text-md-right">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                        color="#000000"
                      />
                    </div>
                    <div className="col-md-6 py-1 text-md-left align-middle">
                      dswami@usc.edu
                    </div>
                  </div>
                  <div className="row my-1 mx-auto">
                    <div className="col-md-6 text-md-right">
                      <FontAwesomeIcon
                        icon={faPhone}
                        size="2x"
                        color="#000000"
                      />
                    </div>
                    <div className="col-md-6 py-1 text-md-left align-middle">
                      +1(510)-815-8290
                    </div>
                  </div>
                </h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
