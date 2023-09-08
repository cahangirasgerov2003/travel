import "./vacation.css";
import React from "react";

const Vacation = () => {
  return (
    <div className="vacationContext">
      <p>Top Vacation Destinations</p>

      <div className="container communityContainer">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-6  halfColumnCommunity">
            <div className="d-flex flex-column vocationContextImages">
              <img
                alt="Bali"
                src={process.env.PUBLIC_URL + "./images/bali.svg"}
              ></img>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 halfColumnCommunity">
            <div className="vocationContextImages d-flex flex-column">
              <img
                alt="Kerry"
                src={process.env.PUBLIC_URL + "./images/kerry.svg"}
              ></img>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 halfColumnCommunity">
            <div className="vocationContextImages d-flex flex-column">
              <img
                alt="Sydney"
                src={process.env.PUBLIC_URL + "./images/sydney.svg"}
              ></img>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 halfColumnCommunity">
            <div className="vocationContextImages d-flex flex-column">
              <img
                alt="Paris"
                src={process.env.PUBLIC_URL + "./images/paris.svg"}
                className="lastPictureCommunity"
              ></img>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="vacationContainer">
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
      </div> */}
    </div>
  );
};

export default Vacation;
