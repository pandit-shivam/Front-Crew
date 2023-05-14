import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import app_config from '../../config';
import contact from './Contact';

const {themeColor, title} = app_config;


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: themeColor}}>
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" navbar-nav me-auto my-auto">
              <li className="nav-item">
                <NavLink className="nav-link fw-bold text-white my-auto" to="/main/Home">
                  
                  <img src='/logo.png' height={40} />
                  <span className='h2'>{title}</span>
                </NavLink>
              </li>
              <li className="nav-item mt-2">
                <NavLink className="nav-link fw-bold" to="/main/Home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mt-2">
                <NavLink className="nav-link  fw-bold" to="/main/Sign_up">
                  Sign_up
                </NavLink>
              </li>
              <li className="nav-item mt-2">
                <NavLink className="nav-link fw-bold" to="/main/Login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item mt-2">
                <NavLink className="nav-link fw-bold" to="/main/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav flex-row">
              {/* Icons */}
              <li className="nav-item">
                <a className="nav-link pe-2 " href="#!">
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-2" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-2" href="#!">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ps-2" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>


    </div>
  )
}

export default Navbar