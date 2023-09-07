import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <nav className="navContainer ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="brandContext">
            <Link to="/">trxvl.</Link>
          </div>
          <div className="navList">
            <ul className="d-flex">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/stars">Stays</NavLink>
              </li>
              <li>
                <NavLink to="/fights">Fights</NavLink>
              </li>
              <li>
                <NavLink to="/packages">Packages</NavLink>
              </li>
              <li>
                <NavLink to="/signUp">Sign Up</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
