import React, { Component } from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="homeContent pt-5 m-0">
        <img
          className="mt-5"
          id="profileHome"
          src={"http://dswami.freevar.com/git_icons/profile_bw.png"}
          alt=""
        />
        <div id="introHome" className="mt-3">
          Passionate Machine Learning Practitioner <br /> and Software Engineer
        </div>

        <div className="mt-4 pt-4 row" id="resumeDownload">
          <div className="col resumeText">
            Download <br />
            Resume
          </div>
          <a
            className="col resumeLink"
            href="http://dswami.freevar.com/cloud_docs/Devendra_Swami.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDownload} size="4x" color="#000000" />
          </a>
        </div>
        <div className="mt-5 davidQuote">
          <i>
            "All problems in computer science can be solved by another level of
            indirection"
          </i>
          &nbsp;- David Wheeler
        </div>
      </div>
    );
  }
}

export default Home;
