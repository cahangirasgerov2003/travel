import "./health.css";
import React from "react";

const Health = () => {
  return (
    <div style={{ position: "absolute", top: 12, right: 10 }}>
      <div>
        <img
          alt="Health"
          src={process.env.PUBLIC_URL + "./images/health.svg"}
          style={{ width: 27.73 + "px", height: 24.45 + "px" }}
          onClick={(e) => {
            e.target.getAttribute("src") === "./images/health.svg"
              ? e.target.setAttribute(
                  "src",
                  `${process.env.PUBLIC_URL}./images/health2.svg`
                )
              : e.target.setAttribute(
                  "src",
                  `${process.env.PUBLIC_URL}./images/health.svg`
                );
          }}
        ></img>
      </div>
    </div>
  );
};

export default Health;
