import React from "react";
import PropTypes from "prop-types";
import '../css/custom.css';

export default function Navbar(props) {

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode==='dark'?'dark':'light'} px-5 justify-content-between ${props.mode === 'light' ? 'navDarkShadow' : 'navLightShadow'} mb-4`}>
        <div className="d-flex">
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
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">{props.mode === `light` ? `Dark Mode` : `Light Mode`}</label>
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
