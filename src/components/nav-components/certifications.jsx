import React, { Component } from "react";
import { getCertificates } from "../services/fakeCertifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import "./certifications.css";

class Certifications extends Component {
  state = { certifications: getCertificates(), numArrColumns: 4 };
  constructor() {
    super();
    const c = _.chunk(this.state.certifications, this.state.numArrColumns);
    this.state.certifications = c;
  }
  render() {
    return (
      <div id="mainCertificates" className="container pb-5">
        {this.state.certifications.map(cArr => (
          <div className="row px-5" key={cArr[0]._id}>
            {cArr.map(c => (
              <div className="col-md-3 certificate mt-4" key={c._id}>
                <a
                  href={c.url}
                  target="_blank"
                  className="custom-card"
                  rel="noopener noreferrer"
                >
                  <div className="card border-0 mx-2">
                    <img className="card-img-top" src={c.url} alt="" />
                    <div className="card-body p-2">
                      <h5 className="card-title mb-0">{c.title}</h5>
                      <p className="card-text">
                        {c.tags.map(tag => (
                          <span key={tag.num}>
                            <FontAwesomeIcon
                              icon={faTag}
                              size="1x"
                              color="grey"
                            />
                            &nbsp;{tag.name}&emsp;
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Certifications;
