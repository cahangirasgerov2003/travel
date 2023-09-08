import "./offers.css";
import React from "react";

const Offers = () => {
  return (
    <div className="offersContext">
      <p className="offersTitle">Offers</p>
      <div className="container offersContainer">
        <div className="row">
          <div className="col-md-6 col-12 halfColumn">
            <div className="columnContext d-flex">
              <img
                alt="Domestic"
                src={process.env.PUBLIC_URL + "./images/domestic.svg"}
              ></img>
              <div>
                <p className="desc1">Domestic Flights</p>
                <p className="desc2">Huge savings on flight with trxvl.</p>
                <p className="desc3">
                  Book domestic flights starting @ just ₹1459
                </p>
                <button className="offersButton">Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 halfColumn">
            <div className="columnContext d-flex">
              <img
                alt="International"
                src={process.env.PUBLIC_URL + "./images/international.svg"}
                style={{ borderRadius: 36 + "px" }}
              ></img>
              <div>
                <p className="desc1">International Hotels</p>
                <p className="desc2">
                  Enjoy upto 20% off on International Hotels
                </p>
                <p className="desc3">
                  Make the most of this deal on your first booking with trxvl.
                </p>
                <button className="offersButton">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
