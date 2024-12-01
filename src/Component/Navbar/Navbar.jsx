import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Logo
          </Link>
          <div
            className={`menu-toggle ${isOpen ? "active" : ""}`}
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>Courses</span>
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="chevron-down"
                    />
                  </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="" className="dropdown-item">
                      Courses One
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="dropdown-item">
                      Courses Two
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>Instructors</span>
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="chevron-down"
                    />
                  </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="" className="dropdown-item">
                      Instructors One
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="dropdown-item">
                      Instructors Two
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>Blogs</span>
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="chevron-down"
                    />
                  </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="" className="dropdown-item">
                      Blog One
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="dropdown-item">
                      Blog Two
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 r-section">
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <i class="bi bi-bag"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="">
                  <button type="button" className="myBtn">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
