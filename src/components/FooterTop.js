import "./footerTop.css";
import React from "react";

const footerTop = () => {
  return (
    <div className="footerTopBg d-flex">
      <div className="photoContext">
        <img
          alt="Phone"
          src={process.env.PUBLIC_URL + "./images/phone.svg"}
        ></img>
      </div>
      <div className="container connectionContext">
        <div className="row">
          <div className="col-12">
            <h2 className="footerTitle">Your all-in-one travel app.</h2>
            <h3 className="footerDesc">
              Book flights, hotels, trains & rental cars anywhere in the world
              in just seconds. Get real-time flight updates, travel info,
              exclusive deals, and 30% more Trip Coins only on the app!
            </h3>
          </div>
          <div className="col-8">
            <div>
              <button type="button" className="buttonMobile">
                Mobile
              </button>
              <button type="button" className="buttonEmail">
                Email
              </button>
            </div>
            <div className="mt-3">
              <p className="phoneNumber">
                Enter your phone number to receive a text with a link to
                download the app.
              </p>
              <div className="phoneInputText">
                <input placeholder="+091 Mobile number" />
                <button type="button">Search</button>
              </div>
            </div>
          </div>
          <div className="col-1 orContext text-center">
            <p className="my-3">|</p>
            <h4 className="mb-3">or</h4>
            <p>|</p>
          </div>
          <div className="col-3 gPlayAppStore">
            <img
              alt="Google Play"
              src={process.env.PUBLIC_URL + "./images/googlePlay.svg"}
              className="mb-4"
            ></img>
            <img
              alt="App Store"
              src={process.env.PUBLIC_URL + "./images/appStore.svg"}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footerTop;
