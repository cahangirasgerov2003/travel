import "./footerTop.css";
import React, { useState } from "react";

const FooterTop = () => {
  const [state, setState] = useState(true);
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
          <div className="col-xl-8 col-lg-12">
            <div className="buttonMoEm">
              <button
                type="button"
                className="buttonMobile"
                onClick={() => {
                  setState(true);
                  const element = document.querySelector(".buttonEmail");
                  const element2 = document.querySelector(".buttonMobile");
                  element.style.backgroundColor = "transparent";
                  element2.style.backgroundColor = "#ffffff66";
                }}
              >
                Mobile
              </button>
              <button
                type="button"
                className="buttonEmail"
                onClick={() => {
                  setState(false);
                  const element = document.querySelector(".buttonEmail");
                  const element2 = document.querySelector(".buttonMobile");
                  element.style.backgroundColor = "#ffffff66";
                  element2.style.backgroundColor = "transparent";
                }}
              >
                Email
              </button>
            </div>
            <div className="mt-3">
              <p className="phoneNumber">
                Enter your {state ? "phone number" : "email"} to receive a text
                with a link to download the app.
              </p>
              <div className="phoneInputText">
                <input
                  className="ps-2"
                  placeholder={state ? "+091 Mobile number" : "Email adress"}
                />
                <button type="button">Search</button>
              </div>
            </div>
          </div>
          <div className="col-xl-1 col-lg-2 orContext text-center">
            <p className="my-3">|</p>
            <h4 className="mb-3">or</h4>
            <p>|</p>
          </div>
          <div className="col-xl-3 col-lg-10 gPlayAppStore">
            <img
              alt="Google Play"
              src={process.env.PUBLIC_URL + "./images/googlePlay.svg"}
              className="mb-4"
              style={{ width: 202.82 + "px", height: 60.85 + "px" }}
            ></img>
            <img
              alt="App Store"
              src={process.env.PUBLIC_URL + "./images/appStore.svg"}
              style={{ width: 202.82 + "px", height: 60.85 + "px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
