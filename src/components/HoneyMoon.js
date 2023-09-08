import "./papularBeach.css";
import "./honeyMoon.css";
import React from "react";
import MountainCard from "./MountainCard";
import Health from "./Health";

const honeyMoon = () => {
  return (
    <div className="papularContext honeyMoonContext">
      <p className="papularTitle" style={{ color: "black" }}>
        Honeymoon Freebies Special
      </p>
      <div className="container papularContainer">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 halfColumnPapular">
            <div className="columnContextPapular d-flex flex-column">
              <div style={{ position: "relative" }}>
                <img
                  alt="Mauritius"
                  src={process.env.PUBLIC_URL + "./images/mauritius.svg"}
                  className="w-100"
                  style={{ borderRadius: 5 + "px" }}
                ></img>
                <Health />
              </div>
              <div>
                <div className="d-flex justify-content-between desc1Papular mb-2">
                  <p>Mauritius</p>
                  <div className="d-flex align-items-center">
                    <img
                      alt="star"
                      src={process.env.PUBLIC_URL + "./images/star.svg"}
                      style={{ width: 24 + "px", height: 24 + "px" }}
                    ></img>
                    <p className="ms-1">4.7</p>
                  </div>
                </div>
                <MountainCard />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 halfColumnPapular">
            <div className="columnContextPapular d-flex flex-column">
              <div style={{ position: "relative" }}>
                <img
                  alt="Havelock"
                  src={process.env.PUBLIC_URL + "./images/havelock.svg"}
                  className="w-100"
                  style={{ borderRadius: 5 + "px" }}
                ></img>
                <Health />
              </div>
              <div>
                <div className="d-flex justify-content-between desc1Papular mb-2">
                  <p>Havelock</p>
                  <div className="d-flex align-items-center">
                    <img
                      alt="star"
                      src={process.env.PUBLIC_URL + "./images/star.svg"}
                      style={{ width: 24 + "px", height: 24 + "px" }}
                    ></img>
                    <p className="ms-1">4.9</p>
                  </div>
                </div>
                <MountainCard />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 halfColumnPapular">
            <div className="columnContextPapular d-flex flex-column">
              <div style={{ position: "relative" }}>
                <img
                  alt="Whitsunday Islands"
                  src={process.env.PUBLIC_URL + "./images/whitsunday.svg"}
                  className="w-100"
                  style={{ borderRadius: 5 + "px" }}
                ></img>
                <Health />
              </div>
              <div>
                <div className="d-flex justify-content-between desc1Papular mb-2">
                  <p>
                    Whitsunday
                    {/* Islands */}
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      alt="star"
                      src={process.env.PUBLIC_URL + "./images/star.svg"}
                      style={{ width: 24 + "px", height: 24 + "px" }}
                    ></img>
                    <p className="ms-1">4.5</p>
                  </div>
                </div>
                <MountainCard />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 halfColumnPapular">
            <div className="columnContextPapular d-flex flex-column">
              <div style={{ position: "relative" }}>
                <img
                  alt="Maldives"
                  src={process.env.PUBLIC_URL + "./images/maldives.svg"}
                  className="w-100"
                  style={{ borderRadius: 5 + "px" }}
                ></img>
                <Health />
              </div>
              <div>
                <div className="d-flex justify-content-between desc1Papular mb-2">
                  <p>Maldives</p>
                  <div className="d-flex align-items-center">
                    <img
                      alt="star"
                      src={process.env.PUBLIC_URL + "./images/star.svg"}
                      style={{ width: 24 + "px", height: 24 + "px" }}
                    ></img>
                    <p className="ms-1">4.2</p>
                  </div>
                </div>
                <MountainCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default honeyMoon;
