import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <>
      
      <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        <ul className="navbar-nav me-auto mb-2 mb-lg-2">
          <li className="nav-item">
            <NavLink  className="nav-link text-dark fw-bold" to="/main/Home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark fw-bold" to="/main/Sign_up">
              Sign_up
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fw-bold" href="#!">
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fw-bold" href="#!">
              Contact
            </a>
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
  {/* Navbar */}
</>


</>

      
    </div>
  )
}

export default Navbar