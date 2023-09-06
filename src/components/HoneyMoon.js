import "./papularBeach.css";
import "./honeyMoon.css";
import React from "react";
import MountainCard from "./MountainCard";

const honeyMoon = () => {
  return (
    <div className="papularContext honeyMoonContext">
      <p className="papularTitle" style={{ color: "black" }}>
        Honeymoon Freebies Special
      </p>
      <div className="container papularContainer">
        <div className="row">
          <div className="col-3 halfColumnPapular">
            <div className="columnContextPapular d-flex flex-column">
              <img
                alt="Mauritius"
                src={process.env.PUBLIC_URL + "./images/mauritius.svg"}
                style={{ borderRadius: 5 + "px" }}
              ></img>
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
          <div className="col-3 halfColumnPapular">
            <div className="columnContextPapular d-flex flex-column">
              <img
                alt="Havelock"
                src={process.env.PUBLIC_URL + "./images/havelock.svg"}
                style={{ borderRadius: 5 + "px" }}
              ></img>
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
          <div className="col-3 halfColumnPapular">
            <div className="columnContextPapular d-flex flex-column">
              <img
                alt="Whitsunday Islands"
                src={process.env.PUBLIC_URL + "./images/whitsunday.svg"}
                style={{ borderRadius: 5 + "px" }}
              ></img>
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
          <div className="col-3 halfColumnPapular">
            <div className="columnContextPapular d-flex flex-column">
              <img
                alt="Maldives"
                src={process.env.PUBLIC_URL + "./images/maldives.svg"}
                style={{ borderRadius: 5 + "px" }}
              ></img>
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
