import Health from "./Health";
import MountainCard from "./MountainCard";
// import "./inclusivePackages.css";
import "./papularBeach.css";
import React from "react";

const InclusivePackages = () => {
  return (
    <>
      <div className="papularContext">
        <p className="papularTitle" style={{ color: "black" }}>
          All Inclusive Packages!
        </p>
        <div className="container papularContainer">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 halfColumnPapular">
              <div className="columnContextPapular d-flex flex-column">
                <div style={{ position: "relative" }}>
                  <img
                    alt="Val Di Funes"
                    src={process.env.PUBLIC_URL + "./images/funes.svg"}
                    className="w-100"
                    style={{ borderRadius: 5 + "px" }}
                  ></img>
                  <Health />
                </div>
                <div>
                  <div className="d-flex justify-content-between desc1Papular mb-2">
                    <p>Val di Funes</p>
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
                    alt="Ushuaia"
                    src={process.env.PUBLIC_URL + "./images/ushuaia.svg"}
                    className="w-100"
                    style={{ borderRadius: 5 + "px" }}
                  ></img>
                  <Health />
                </div>
                <div>
                  <div className="d-flex justify-content-between desc1Papular mb-2">
                    <p>Ushuaia</p>
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
                    alt="Berchtesgaden"
                    src={process.env.PUBLIC_URL + "./images/berchtesgaden.svg"}
                    className="w-100"
                    style={{ borderRadius: 5 + "px" }}
                  ></img>
                  <Health />
                </div>
                <div>
                  <div className="d-flex justify-content-between desc1Papular mb-2">
                    <p>Berchtesgaden</p>
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
                    alt="Fussen"
                    src={process.env.PUBLIC_URL + "./images/fussen.svg"}
                    className="w-100"
                    style={{ borderRadius: 5 + "px" }}
                  ></img>
                  <Health />
                </div>
                <div>
                  <div className="d-flex justify-content-between desc1Papular mb-2">
                    <p>Fussen</p>
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
    </>
  );
};

export default InclusivePackages;
