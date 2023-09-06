import "./inclusivePackages.css";
import React from "react";

const InclusivePackages = () => {
  return (
    <div className="packagesContext">
      <p className="packagesTitle">
        Connect with other travelers in our packages
      </p>
      <div className="container packagesContainer">
        <div className="row">
          <div className="col-3 halfColumnPackages">
            <div className="columnContextPackages d-flex flex-column">
              <img
                alt="Domestic"
                src={process.env.PUBLIC_URL + "./images/india.svg"}
              ></img>
              <div>
                <p className="desc1Packages">India</p>
                <p className="desc2Packages">Travel packages</p>
                <p className="desc3Packages">155,073 travelers</p>
              </div>
            </div>
          </div>
          <div className="col-3 halfColumnPackages">
            <div className="columnContextPackages d-flex flex-column">
              <img
                alt="International"
                src={process.env.PUBLIC_URL + "./images/travelTalk.svg"}
              ></img>
              <div>
                <p className="desc1Packages">Travel Talk</p>
                <p className="desc2Packages">Travel packages</p>
                <p className="desc3Packages">155,073 travelers</p>
              </div>
            </div>
          </div>
          <div className="col-3 halfColumnPackages">
            <div className="columnContextPackages d-flex flex-column">
              <img
                alt="Domestic"
                src={process.env.PUBLIC_URL + "./images/beach.svg"}
              ></img>
              <div>
                <p className="desc1Packages">Beach</p>
                <p className="desc2Packages">Travel packages</p>
                <p className="desc3Packages">155,073 travelers</p>
              </div>
            </div>
          </div>
          <div className="col-3 halfColumnPackages">
            <div className="columnContextPackages d-flex flex-column">
              <img
                alt="International"
                src={process.env.PUBLIC_URL + "./images/mountainsCom.svg"}
                className="lastPicturePackages"
              ></img>
              <div>
                <p className="desc1Packages">Mountains</p>
                <p className="desc2Packages">Travel packages</p>
                <p className="desc3Packages">155,073 travelers </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InclusivePackages;
