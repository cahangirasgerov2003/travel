import Categories from "./Categories";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TitlePage from "./TitlePage";
import "./mountains.css";
import React from "react";

const Mountains = () => {
  return (
    <div className="mountainComponent">
      <Navbar />
      <div className="mountainMainContainer">
        <TitlePage />
        <Categories />
      </div>
      <div className="mountainFooterContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Mountains;
