import Navbar from "./Navbar";
import "./home.css";
import TitlePage from "./TitlePage";
import React from "react";
import Categories from "./Categories";
import Vacation from "./Vacation";
import Offers from "./Offers";
import Browse from "./Browse";
import TravelExpert from "./TravelExpert";

const Home = () => {
  return (
    <div className="homeComponent">
      <Navbar />
      <div className="mainContainer">
        <TitlePage />
        <Categories />
        <Vacation />
        <Offers />
        <Browse />
        <TravelExpert />
      </div>
    </div>
  );
};

export default Home;
