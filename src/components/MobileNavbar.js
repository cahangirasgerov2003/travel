import "./mobileNavbar.css";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const MobileNavbar = () => {
  const [clickEvent, setClickEvent] = useState(false);
  return (
    <div className="d-flex">
      {clickEvent && <DropdownMenu setClickEvent={setClickEvent} />}
      <div className="d-flex align-items-center hamburgerPicture">
        <img
          alt="Hamburger"
          src={process.env.PUBLIC_URL + "./images/icon/hamburger.svg"}
          onClick={() => {
            clickEvent ? setClickEvent(false) : setClickEvent(true);
          }}
        ></img>
      </div>
      <div className="m-auto d-flex align-items-center hamburgerTitle">
        trxvl.
      </div>
    </div>
  );
};

export default MobileNavbar;
