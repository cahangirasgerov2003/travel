import MountainCard from "./MountainCard";
import "./papularBeach.css";
import React from "react";

const PapularBeach = () => {
  return (
    <div className="papularContext">
      <p className="papularTitle">Popular Beach Destinations</p>
      <div className="container papularContainer">
        <div className="row">
          <div className="col-3 halfColumnPapular">
            <div className="columnContextPapular d-flex flex-column">
              <img
                alt="Swiss"
                src={process.env.PUBLIC_URL + "./images/swiss.svg"}
                style={{ borderRadius: 5 + "px" }}
              ></img>
              <div>
                <div className="d-flex justify-content-between desc1Papular mb-2">
                  <p>Swiss Apls</p>
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
                alt="Hallstatt"
                src={process.env.PUBLIC_URL + "./images/hallStat.svg"}
                style={{ borderRadius: 5 + "px" }}
              ></img>
              <div>
                <div className="d-flex justify-content-between desc1Papular mb-2">
                  <p>Hallstatt</p>
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
                alt="Faroe Island"
                src={process.env.PUBLIC_URL + "./images/faroe.svg"}
                style={{ borderRadius: 5 + "px" }}
              ></img>
              <div>
                <div className="d-flex justify-content-between desc1Papular mb-2">
                  <p>Faroe Island</p>
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
                alt="Innsbruck"
                src={process.env.PUBLIC_URL + "./images/innsbruck.svg"}
                style={{ borderRadius: 5 + "px" }}
              ></img>
              <div>
                <div className="d-flex justify-content-between desc1Papular mb-2">
                  <p>Innsbruck</p>
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

export default PapularBeach;
