import React from "react";
import { NavLink } from "react-router-dom";
import '../css/custom.css';

export default function Navbar(props) {

  const navStyle = {
    position: 'sticky',
    top: '0px',
    backdropFilter: 'blur(5px)'
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark' ? 'dark' : 'light'} px-5 justify-content-between ${props.mode === 'light' ? 'navDarkShadow' : 'navLightShadow'}`} style={navStyle}>
        <div className="d-flex">
          <a className="navbar-brand" href="/" style={{fontWeight: 800}}>
            TextUtil
          </a>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/' className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">{props.mode === `light` ? `Light Mode` : `Dark Mode`}</label>
        </div>
      </nav>
    </>
  );
}