import MountainCard from "./MountainCard";
import "./recently.css";
import React from "react";

const Recently = () => {
  return (
    <div className="recentlyContext">
      <p className="recentlyTitle">Recently Viewed</p>
      <div className="container recentlyContainer">
        <div className="row">
          <div className="col-3 halfColumnRecently">
            <div className="columnContextRecently d-flex flex-column">
              <img
                alt="Hallstat"
                src={process.env.PUBLIC_URL + "./images/hallStat.svg"}
                style={{ borderRadius: 5 + "px" }}
              ></img>
              <div>
                <div className="d-flex justify-content-between desc1Recently mb-2">
                  <p>Hallstat</p>
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
          <div className="col-3 halfColumnRecently">
            <div className="columnContextRecently d-flex flex-column">
              <img
                alt="Innsbruck"
                src={process.env.PUBLIC_URL + "./images/innsbruck.svg"}
                style={{ borderRadius: 5 + "px" }}
              ></img>
              <div>
                <div className="d-flex justify-content-between desc1Recently mb-2">
                  <p>Hallstatt</p>
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

          <div className="col-3 summerBonanzaContainer">
            <div className="summerBonanza d-flex flex-column">
              <h1>Summer Bonanza!</h1>
              <div>
                <p className="mt-3">
                  Enjoy confortable transfers in shared coaches
                </p>
                <p>Choose from 5 flights per week</p>
                <p>Get a free Rapid Antigen Test at selected hotels</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recently;
