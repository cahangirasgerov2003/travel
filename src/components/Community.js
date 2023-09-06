import "./community.css";
import React from "react";

const community = () => {
  return (
    <div className="communityContext">
      <p className="communityTitle">
        Connect with other travelers in our community
      </p>
      <div className="container communityContainer">
        <div className="row">
          <div className="col-3 halfColumnCommunity">
            <div className="columnContextCommunity d-flex flex-column">
              <img
                alt="Domestic"
                src={process.env.PUBLIC_URL + "./images/india.svg"}
              ></img>
              <div>
                <p className="desc1Community">India</p>
                <p className="desc2Community">Travel community</p>
                <p className="desc3Community">155,073 travelers</p>
              </div>
            </div>
          </div>
          <div className="col-3 halfColumnCommunity">
            <div className="columnContextCommunity d-flex flex-column">
              <img
                alt="International"
                src={process.env.PUBLIC_URL + "./images/travelTalk.svg"}
              ></img>
              <div>
                <p className="desc1Community">Travel Talk</p>
                <p className="desc2Community">Travel community</p>
                <p className="desc3Community">155,073 travelers</p>
              </div>
            </div>
          </div>
          <div className="col-3 halfColumnCommunity">
            <div className="columnContextCommunity d-flex flex-column">
              <img
                alt="Domestic"
                src={process.env.PUBLIC_URL + "./images/beach.svg"}
              ></img>
              <div>
                <p className="desc1Community">Beach</p>
                <p className="desc2Community">Travel community</p>
                <p className="desc3Community">155,073 travelers</p>
              </div>
            </div>
          </div>
          <div className="col-3 halfColumnCommunity">
            <div className="columnContextCommunity d-flex flex-column">
              <img
                alt="International"
                src={process.env.PUBLIC_URL + "./images/mountainsCom.svg"}
                className="lastPictureCommunity"
              ></img>
              <div>
                <p className="desc1Community">Mountains</p>
                <p className="desc2Community">Travel community</p>
                <p className="desc3Community">155,073 travelers </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default community;
