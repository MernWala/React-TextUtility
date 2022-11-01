import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-5">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {" "}
                {props.aboutText}{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
