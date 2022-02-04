import React, { Component } from "react";
import profile_pic from '../../images/git_icons/profile_bw.png';
import "./about.css";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="aboutContent pt-5 m-0">
        <img
          className="mt-3"
          id="profileAbout"
          src={profile_pic}
          alt=""
        />
        <div id="introAbout" className="mt-3 col-md-7 my-5 mx-auto px-1">
          I am currently working as a Software Engineer in Technical Operations at ServiceNow. Before joining ServiceNow, I worked for two and
          half years as Data Scientist at Axis Bank Innovation Lab,
          India. <br />
          <br />I am interested in solving real world problems through
          automation and data-driven solutions. I loved to develop end to end software
          solutions, deploying machine learning and deep learning models
          leveraging both structured data as well as unstructured data,
          including video, audio and text. Most of them are available online at
          my Github repository and feel free to check them out{" "}
          <a
            className="about-git"
            href={"https://github.com/dvndra"}
            alt=""
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            here
          </a>
          .
          <br />
          <br />
          Apart from watching movies and tv shows in my spare time as usual, I
          also enjoy playing outdoor sports and going for biking and short hikes nearby.
          <br /> <br />
        </div>
      </div>
    );
  }
}

export default About;
