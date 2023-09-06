import Navbar from "./Navbar";
import "./home.css";
import TitlePage from "./TitlePage";
import React from "react";
import Categories from "./Categories";
import Vacation from "./Vacation";
import Offers from "./Offers";
import Browse from "./Browse";
import TravelExpert from "./TravelExpert";
import Community from "./Community";
import FooterTop from "./FooterTop";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="homeComponent">
      <Navbar />
      <div className="mainContainer">
        <TitlePage />
        <div style={{ marginTop: 140 + "px" }}>
          <Categories />
        </div>
        <Vacation />
        <Offers />
        <Browse />
        <TravelExpert />
        <Community />
      </div>
      <div className="footerContainer">
        <FooterTop />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
