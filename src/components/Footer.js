import { Link } from "react-router-dom";
import "./footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="container trxContainer">
      <div className="row trxRow">
        <div className="col-2">
          <p className="brandName">Trxvl.</p>
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-3">
              <ul className="listsInfo">
                <li>
                  <Link to="">Seslendirme ve Alt Jazz</Link>
                </li>
                <li>
                  <Link to="">Media Market</Link>
                </li>
                <li>
                  <Link to="">Gillie</Link>
                </li>
                <li>
                  <Link to="">Size Last</Link>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="listsInfo">
                <li>
                  <Link to="">Self Betimes</Link>
                </li>
                <li>
                  <Link to="">Yatırımcı İlişkileri</Link>
                </li>
                <li>
                  <Link to="">Basal Himmler</Link>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="listsInfo">
                <li>
                  <Link to="">Yard Market</Link>
                </li>
                <li>
                  <Link to="">Is İmkanları</Link>
                </li>
                <li>
                  <Link to="">Car Tercihleri</Link>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="listsInfo">
                <li>
                  <Link to="">Hedge Karla</Link>
                </li>
                <li>
                  <Link to="">Mullein Koşulları</Link>
                </li>
                <li>
                  <Link to="">Autumnal Bulgier</Link>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <button type="button" className="helmetkod">
                Helmet KOD
              </button>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div className="sosialMedia">
                <img
                  alt="fecebook"
                  src={process.env.PUBLIC_URL + "./images/icon/fecebook.svg"}
                ></img>
                <img
                  alt="instagram"
                  src={process.env.PUBLIC_URL + "./images/icon/instagram.svg"}
                ></img>
                <img
                  alt="twitter"
                  src={process.env.PUBLIC_URL + "./images/icon/twitter.svg"}
                ></img>
                <img
                  alt="youtube"
                  src={process.env.PUBLIC_URL + "./images/icon/youtube.svg"}
                ></img>
              </div>
            </div>
            <div className="col-12 mt-3">
              <p className="policy">
                © 1997-2021 Netflix, Inc. '{"i-062d573a0ee099242"}'
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
