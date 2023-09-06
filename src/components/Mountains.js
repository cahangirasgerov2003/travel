import Categories from "./Categories";
import Footer from "./Footer";
import InclusivePackages from "./InclusivePackages";
import Navbar from "./Navbar";
import PapularBeach from "./PapularBeach";
import Recently from "./Recently";
import SearchBar from "./SearchBar";
import TitlePage from "./TitlePage";
import "./mountains.css";
import React from "react";

const Mountains = () => {
  return (
    <div className="mountainComponent">
      <Navbar />
      <div className="mountainMainContainer">
        <TitlePage />
        <SearchBar />
        <div style={{ marginTop: 40 + "px", marginBottom: 80 + "px" }}>
          <Categories />
        </div>
        <PapularBeach />
        <Recently />
        <InclusivePackages />
      </div>
      <div className="mountainFooterContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Mountains;
