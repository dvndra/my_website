import React, { Component } from "react";
import { getProjects } from "../services/fakeProjects";
import "./projects.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

class Projects extends Component {
  state = { projects: getProjects() };
  render() {
    return (
      <div id="mainProjects" className="container-fluid m-0 py-3">
        {this.state.projects.map(project => (
          <div className="row project my-5" key={project._id}>
            <div className="col-md-1"></div>
            <div className="col-md-3 my-auto">
              <img src={project.imageUrl} alt="" />
            </div>
            <div className="col-md-7">
              <div className="card mb-2">
                <div className="card-body">
                  <div className="card-title">{project.title}</div>
                  <div className="card-text">
                    <div>{project.description}</div>
                    <div>
                      <FontAwesomeIcon icon={faGithub} />
                      <a
                        href={project.github}
                        className="github-repo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Github Repository
                      </a>
                    </div>
                    <div>
                      {project.tags.map(tag => (
                        <span key={tag.num}>
                          <FontAwesomeIcon icon={faTag} />
                          &nbsp;{tag.name}&emsp;
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
