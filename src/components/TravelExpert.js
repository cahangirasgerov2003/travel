import "./travelExpert.css";
import React from "react";

const TravelExpert = () => {
  return (
    <div style={{ position: "relative" }} className="planTravelContext">
      <img
        alt="Plan"
        src={process.env.PUBLIC_URL + "./images/planTravel.svg"}
        style={{
          background: "#00000059",
          borderRadius: 10 + "px",
        }}
      ></img>
      <div style={{ position: "absolute", top: 80 + "px", left: 80 + "px" }}>
        <p className="descPlan1 mb-3">
          Plan your trip with travel{" "}
          <span className="d-block descPlan1">expert</span>
        </p>
        <p className="descPlan2 m-0">
          Our professional advisors can craft your perfect itinerary
        </p>
      </div>
    </div>
  );
};

export default TravelExpert;
