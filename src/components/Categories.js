import { NavLink } from "react-router-dom";
import "./categories.css";
import React from "react";

const Categories = () => {
  return (
    <div className="categoriesContainer">
      <p className="categoriesTitle">Top categories</p>
      <div>
        <ul className="d-flex flex-wrap align-items-center categoriesList">
          <li>
            <NavLink to="/beaches">
              <img
                alt="Beaches"
                src={process.env.PUBLIC_URL + "/images/icon/beaches.svg"}
              ></img>
              <p>Beaches</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/deserts">
              <img
                alt="Deserts"
                src={process.env.PUBLIC_URL + "/images/icon/deserts.svg"}
              ></img>
              <p>Deserts</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/mountains">
              <img
                alt="Mountains"
                src={process.env.PUBLIC_URL + "/images/icon/mountains.svg"}
              ></img>
              <p>Mountains</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cities">
              <img
                alt="Iconic Cities"
                src={process.env.PUBLIC_URL + "/images/icon/cities.svg"}
              ></img>
              <p>Iconic Cities</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/houseboats">
              <img
                alt="Houseboats"
                src={process.env.PUBLIC_URL + "/images/icon/houseboats.svg"}
              ></img>
              <p>Houseboats</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/country">
              <img
                alt="Countryside"
                src={process.env.PUBLIC_URL + "/images/icon/country.svg"}
              ></img>
              <p>Countryside</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/camping">
              <img
                alt="Camping"
                src={process.env.PUBLIC_URL + "/images/icon/camping.svg"}
              ></img>
              <p>Camping</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/castles">
              <img
                alt="Castles"
                src={process.env.PUBLIC_URL + "/images/icon/castles.svg"}
              ></img>
              <p>Castles</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/skiing">
              <img
                alt="Skiing"
                src={process.env.PUBLIC_URL + "/images/icon/skiing.svg"}
              ></img>
              <p>Skiing</p>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/tropical">
              <img
                alt="Tropical"
                src={process.env.PUBLIC_URL + "/images/icon/tropical.svg"}
              ></img>
              <p>Tropical</p>
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
