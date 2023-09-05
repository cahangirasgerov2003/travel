import { Link } from "react-router-dom";
import "./categories.css";
import React from "react";

const Categories = () => {
  return (
    <div className="categoriesContainer">
      <p className="categoriesTitle">Top categories</p>
      <div>
        <ul className="d-flex flex-wrap justify-content-between align-items-center categoriesList">
          <li>
            <img
              alt="Beaches"
              src={process.env.PUBLIC_URL + "/images/icon/beaches.svg"}
            ></img>
            <Link to="">Beaches</Link>
          </li>
          <li>
            <img
              alt="Deserts"
              src={process.env.PUBLIC_URL + "/images/icon/deserts.svg"}
            ></img>
            <Link to="">Deserts</Link>
          </li>
          <li>
            <img
              alt="Mountains"
              src={process.env.PUBLIC_URL + "/images/icon/mountains.svg"}
            ></img>
            <Link to="/mountains">Mountains</Link>
          </li>
          <li>
            <img
              alt="Iconic Cities"
              src={process.env.PUBLIC_URL + "/images/icon/cities.svg"}
            ></img>
            <Link to="">Iconic Cities</Link>
          </li>
          <li>
            <img
              alt="Houseboats"
              src={process.env.PUBLIC_URL + "/images/icon/houseboats.svg"}
            ></img>
            <Link to="">Houseboats</Link>
          </li>
          <li>
            <img
              alt="Countryside"
              src={process.env.PUBLIC_URL + "/images/icon/country.svg"}
            ></img>
            <Link to="">Countryside</Link>
          </li>
          <li>
            <img
              alt="Camping"
              src={process.env.PUBLIC_URL + "/images/icon/camping.svg"}
            ></img>
            <Link to="">Camping</Link>
          </li>
          <li>
            <img
              alt="Castles"
              src={process.env.PUBLIC_URL + "/images/icon/castles.svg"}
            ></img>
            <Link to="">Castles</Link>
          </li>
          <li>
            <img
              alt="Skiing"
              src={process.env.PUBLIC_URL + "/images/icon/skiing.svg"}
            ></img>
            <Link to="">Skiing</Link>
          </li>
          <li>
            <img
              alt="Tropical"
              src={process.env.PUBLIC_URL + "/images/icon/tropical.svg"}
            ></img>
            <Link to="">Tropical</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
