import { NavLink } from "react-router-dom";
import "./dropdownMenu.css";
import React from "react";

const DropdownMenu = (props) => {
  // document
  //   .querySelectorAll(".dropDownList li a")
  //   .addEventListener("click", () => {
  //     props.setClickEvent(false);
  //   });
  // document.addEventListener("DOMContentLoaded", () => {
  //   document
  //     .querySelector(".dropDownList li a")
  //     .addEventListener("click", () => {
  //       console.log("k");
  //       props.setClickEvent(false);
  //     });
  // });
  return (
    <div
      style={{ position: "absolute", top: 0, left: 0, width: 100 + "%" }}
      className="absoluteDropdown"
    >
      <div className="w-100 d-flex justify-content-between">
        <ul className="d-flex flex-column dropDownList">
          <li>
            <NavLink
              onClick={() => {
                props.setClickEvent(false);
              }}
              to="/"
            >
              *** Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                props.setClickEvent(false);
              }}
              to="/stays"
            >
              *** Stays
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                props.setClickEvent(false);
              }}
              to="/fights"
            >
              *** Fights
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                props.setClickEvent(false);
              }}
              to="/packages"
            >
              *** Packages
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                props.setClickEvent(false);
              }}
              to="/signUp"
            >
              *** Sign Up
            </NavLink>
          </li>
        </ul>
        <div
          className="text-white closeButton"
          onClick={() => {
            props.setClickEvent(false);
          }}
          to="/signUp"
        >
          X
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
