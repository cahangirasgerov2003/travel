import "./mobileNavbar.css";
import React from "react";

const MobileNavbar = () => {
  return (
    <div>
      <div>
        <img
          alt="Hamburger"
          src={process.env.PUBLIC_URL + "./images/icon/hamburger.svg"}
        ></img>
      </div>
      <div>trxvl.</div>
    </div>
  );
};

export default MobileNavbar;
