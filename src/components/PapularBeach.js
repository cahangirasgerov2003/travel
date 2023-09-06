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
                <div>
                  <p className="desc1Papular">Swiss Apls</p>
                  <div>
                    <img alt="star" src=""></img>
                    <p>4.7</p>
                  </div>
                </div>
                <div>
                  <p className="desc2Papular">3Days 4 Nights</p>
                </div>
                <div>
                  <div>
                    <img alt="Flights" src=""></img>
                    <p className="desc3Papular">2 Flights</p>
                  </div>
                  <div>
                    <img alt="Hotel" src=""></img>
                    <p className="desc3Papular">1 Hotel</p>
                  </div>
                  <div>
                    <img alt="Transfers" src=""></img>
                    <p className="desc3Papular">2 Transfers</p>
                  </div>
                  <div>
                    <img alt="Activities" src=""></img>
                    <p className="desc3Papular">4 Activities</p>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>Tour combo with return airport transfer</li>
                    <li>City Tour</li>
                    <li>Curious Corner</li>
                  </ul>
                </div>
                <div>
                  <p className="desc4Papular">₹88,952</p>
                  <p className="desc5Papular">₹88,952</p>
                  <p className="desc6Papular">Per person</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PapularBeach;
