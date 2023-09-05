import { Link } from "react-router-dom";
import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <nav className="navContainer ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="brandContext">
            <Link to="">trxvl.</Link>
          </div>

          <div className="navList">
            <ul className="d-flex">
              <li>
                <Link to="" className="homeLink">
                  Home
                </Link>
              </li>
              <li>
                <Link to="">Stays</Link>
              </li>
              <li>
                <Link to="">Fights</Link>
              </li>
              <li>
                <Link to="">Packages</Link>
              </li>
              <li>
                <Link to="">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
