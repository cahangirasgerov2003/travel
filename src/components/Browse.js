import "./browse.css";
import React from "react";

const browse = () => {
  return (
    <div className="propertyContext">
      <p>Browse by property type</p>

      <div className="container communityContainer">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-6 halfColumnCommunity">
            <div className="d-flex flex-column vocationContextImages">
              <img
                alt="Hotel"
                src={process.env.PUBLIC_URL + "./images/hotels.svg"}
              ></img>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 halfColumnCommunity">
            <div className="vocationContextImages d-flex flex-column">
              <img
                alt="Apartment"
                src={process.env.PUBLIC_URL + "./images/apartments.svg"}
              ></img>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 halfColumnCommunity">
            <div className="vocationContextImages d-flex flex-column">
              <img
                alt="Resort"
                src={process.env.PUBLIC_URL + "./images/resorts.svg"}
              ></img>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 halfColumnCommunity">
            <div className="vocationContextImages d-flex flex-column">
              <img
                alt="Villa"
                src={process.env.PUBLIC_URL + "./images/villas.svg"}
                className="lastPictureCommunity"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default browse;
