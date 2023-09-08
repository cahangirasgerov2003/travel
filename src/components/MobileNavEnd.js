import { NavLink } from "react-router-dom";
import "./mobileNavEnd.css";
import React from "react";

const MobileNavEnd = () => {
  return (
    <div className="endNavContext">
      <div className="endNavList">
        <ul className="d-flex justify-content-between text-center align-items-center">
          <li>
            <NavLink to="/">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "./images/icon/home.svg"}
                  alt="Home"
                ></img>
                <p>Home</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/packages">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "./images/icon/packages.svg"}
                  alt="Packages"
                ></img>
                <p>Packages</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/stays">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "./images/icon/stays.svg"}
                  alt="Stays"
                ></img>
                <p>Stays</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/fights">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "./images/icon/flights.svg"}
                  alt="Flights"
                ></img>
                <p>Flights</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavEnd;
