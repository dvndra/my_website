import React, { Component } from "react";
import "./home.css";
import profile_pic from '../../images/git_icons/profile_bw.png';
import resume from '../../images/cloud_docs/Devendra_Swami.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="homeContent pt-5 m-0">
        <img
          className="mt-3"
          id="profileHome"
          src={profile_pic}
          alt=""
        />
        <div id="introHome" className="mt-4">
        Software Engineer and <br /> Machine Learning Enthusiast
        </div>

        <div className="mt-4 pt-4 row" id="resumeDownload">
          <div className="col resumeText">
            Download <br />
            Resume
          </div>
          <a
            className="col resumeLink"
            href={resume}
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
