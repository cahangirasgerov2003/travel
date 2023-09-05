import "./vacation.css";
import React from "react";

const Vacation = () => {
  return (
    <div className="vacationContext">
      <p>Top Vacation Destinations</p>

      <div className="vacationContainer">
        <div className="rowCards d-flex flex-wrap justify-content-between">
          <div className="vacationCard">
            <img
              alt="Bali"
              src={process.env.PUBLIC_URL + "./images/bali.svg"}
            ></img>
          </div>
          <div className="vacationCard">
            <img
              alt="Kerry"
              src={process.env.PUBLIC_URL + "./images/kerry.svg"}
            ></img>
          </div>
          <div className="vacationCard">
            <img
              alt="Sydney"
              src={process.env.PUBLIC_URL + "./images/sydney.svg"}
            ></img>
          </div>
          <div className="vacationCard">
            <img
              alt="Paris"
              src={process.env.PUBLIC_URL + "./images/paris.svg"}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacation;
