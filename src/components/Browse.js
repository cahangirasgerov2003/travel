import "./browse.css";
import React from "react";

const browse = () => {
  return (
    <div className="propertyContext">
      <p>Browse by property type</p>

      <div className="propertyContainer">
        <div className="rowCards d-flex flex-wrap justify-content-between">
          <div className="propertyCard">
            <img
              alt="hotels"
              src={process.env.PUBLIC_URL + "./images/hotels.svg"}
            ></img>
          </div>
          <div className="propertyCard">
            <img
              alt="apartments"
              src={process.env.PUBLIC_URL + "./images/apartments.svg"}
            ></img>
          </div>
          <div className="propertyCard">
            <img
              alt="Resorts"
              src={process.env.PUBLIC_URL + "./images/resorts.svg"}
            ></img>
          </div>
          <div className="propertyCard">
            <img
              alt="Villas"
              src={process.env.PUBLIC_URL + "./images/villas.svg"}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default browse;
