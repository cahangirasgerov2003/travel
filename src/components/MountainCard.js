import "./mountainCard.css";
import React from "react";

const MountainCard = () => {
  return (
    <>
      <div className="mb-3">
        <p className="desc2Papular">3Days 4 Nights</p>
      </div>
      <div className="d-flex justify-content-between">
        <div className="text-center">
          <img
            alt="Flights"
            src={process.env.PUBLIC_URL + "./images/flight.svg"}
          ></img>
          <p className="desc3Papular">2 Flights</p>
        </div>
        <div className="text-center">
          <img
            alt="Hotel"
            src={process.env.PUBLIC_URL + "./images/hotelLine.svg"}
          ></img>
          <p className="desc3Papular">1 Hotel</p>
        </div>
        <div className="text-center">
          <img
            alt="Car"
            src={process.env.PUBLIC_URL + "./images/car.svg"}
          ></img>
          <p className="desc3Papular">2 Transfers</p>
        </div>
        <div className="text-center">
          <img
            alt="Activities"
            src={process.env.PUBLIC_URL + "./images/trekking.svg"}
          ></img>
          <p className="desc3Papular">4 Activities</p>
        </div>
      </div>
      <div className="desc4Papular ps-3">
        <ul>
          <li>Tour combo with return airport transfer</li>
          <li>City Tour</li>
          <li>Curious Corner</li>
        </ul>
      </div>
      <div className="d-flex">
        <p className="desc5Papular me-4">₹88,952</p>
        <p className="desc6Papular">₹88,952</p>
        <p className="desc7Papular">Per person</p>
      </div>
    </>
  );
};

export default MountainCard;
