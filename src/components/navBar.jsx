import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./navBar.css";
// import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand mx-3 my-0 py-0" to="/">
        <img
          src="https://dswami.freevar.com/git_icons/logo.svg"
          width="30"
          height="30"
          alt=""
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNavAltMarkup"
      >
        <span className="navbar-nav">
          <NavLink className="nav-item nav-link nav-route" to="/about">
            About
          </NavLink>
          <NavLink className="nav-item nav-link nav-route" to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav-item nav-link nav-route" to="/skills">
            Skills
          </NavLink>
          <NavLink className="nav-item nav-link nav-route" to="/certifications">
            Certifications
          </NavLink>
          <NavLink className="nav-item nav-link nav-route" to="/contact">
            Contact
          </NavLink>
        </span>

        <div
          className="social-icons navbar-nav"
          style={{ alignContent: "stretch" }}
        >
          <a
            href="https://www.github.com/dvndra/"
            className="github social nav-item nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} size="1x" />
          </a>
          <a
            href="https://www.linkedin.com/in/devenswami/"
            className="linkedin social nav-item nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
          <a
            href="https://twitter.com/deven_swami/"
            className="twitter social nav-item nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitterSquare} size="1x" />
          </a>
          <a
            href="https://www.facebook.com/deven.swami/"
            className="facebook social nav-item nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
          </a>
          <a
            href="https://www.instagram.com/devenswamy/"
            className="instagram social nav-item nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
