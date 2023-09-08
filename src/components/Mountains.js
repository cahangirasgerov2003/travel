import Categories from "./Categories";
import Footer from "./Footer";
import InclusivePackages from "./InclusivePackages";
import Navbar from "./Navbar";
import PapularBeach from "./PapularBeach";
import Recently from "./Recently";
import SearchBar from "./SearchBar";
import TitlePage from "./TitlePage";
import HoneyMoon from "./HoneyMoon";
import "./mountains.css";
import React from "react";
import MobileNavbar from "./MobileNavbar";

const Mountains = () => {
  return (
    <div className="mountainComponent">
      <Navbar />
      <div className="mountainMainContainer">
        <div className="d-none hamburgerContainer">
          <MobileNavbar />
        </div>
        <TitlePage />
        <SearchBar />
        <div
          className="componentMountain"
          style={{ marginTop: 40 + "px", marginBottom: 80 + "px" }}
        >
          <Categories />
        </div>
        <PapularBeach />
        <Recently />
        <InclusivePackages />
        <HoneyMoon />
      </div>
      <div className="mountainFooterContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Mountains;
