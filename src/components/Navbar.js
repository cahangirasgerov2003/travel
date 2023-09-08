import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <nav className="navContainer ">
        <div className="d-none mobileNav">
          <p className="mb-0 text-white">9:41</p>
          <div className="d-flex">
            <img
              alt="Wi-fi"
              src={process.env.PUBLIC_URL + "./images/mobileNavImage.svg"}
              style={{ width: 67 + "px", height: 11.5 + "px" }}
            ></img>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center navBarMenu">
          <div className="brandContext">
            <Link to="/">trxvl.</Link>
          </div>
          <div className="navList">
            <ul className="d-flex">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/stays">Stays</NavLink>
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
