import "./searchBar.css";
import React from "react";

const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <div className="d-flex searchBarContext justify-content-between">
        <div className="searchBarElement d-flex align-items-center">
          <img
            alt="Search"
            src={process.env.PUBLIC_URL + "./images/search.svg"}
            className="me-2"
          ></img>
          <input
            placeholder="Search destinations, hotels"
            className="searchInput"
          ></input>
        </div>

        <div className="searchBarElement mobileSearchBarCheck d-none">
          <img
            alt="Checkin"
            src={process.env.PUBLIC_URL + "./images/checkIn.svg"}
            className="me-2"
          ></img>
          <p className="mt-1">Check in</p>
          <p className="me-4 ms-4">|</p>
          <img
            alt="Check out"
            src={process.env.PUBLIC_URL + "./images/checkOut.svg"}
            className="me-2"
          ></img>
          <p className="mt-1">Check out</p>
        </div>

        <div className="searchBarElement d-flex align-items-center searchBarElementIn">
          <img
            alt="Checkin"
            src={process.env.PUBLIC_URL + "./images/checkIn.svg"}
            className="me-2"
          ></img>
          <p className="mt-1 me-3">Check in</p>
        </div>
        <div className="searchBarElement d-flex align-items-center searchBarElementOut">
          <img
            alt="Check out"
            src={process.env.PUBLIC_URL + "./images/checkOut.svg"}
            className="me-2"
          ></img>
          <p className="mt-1">Check out</p>
        </div>
        <div className="searchBarElement d-flex align-items-center">
          <img
            alt="Man"
            src={process.env.PUBLIC_URL + "./images/person.svg"}
            className="me-2"
          ></img>
          <p className="mt-1">1 room, 2 adults</p>
        </div>
        <button type="button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
