import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

library.add(faFacebookF, faTwitter, faGooglePlus);

const Footer = () => {
  return (
    <div>
      <div className="row container m-auto footer-main">
        <div className="col-md-3">
          <p className="footer-left">Emergency Dental Care</p>
          <p>Check Up</p>
          <p>Treatment of Personal Diseases</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
        </div>
        <div className="col-md-3 footer-head">
          <h4>Services</h4>
          <p>Emergency Dental Care</p>
          <p>Check Up</p>
          <p>Treatment of Personal Diseases</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
          <p>Check Up</p>
          <p>Check Up</p>
        </div>
        <div className="col-md-3 footer-head">
          <h4>Oral Health</h4>
          <p>Emergency Dental Care</p>
          <p>Check Up</p>
          <p>Treatment of Personal Diseases</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
          <p>Check Up</p>
          <p>Check Up</p>
        </div>
        <div className="col-md-3 footer-head">
          <h4>Our Address</h4>
          <p>New York - 101010 Hudson</p>
          <p>yards.</p>
          <div className="row">
            <div className="col-md-3 footer-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="col-md-3 footer-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="col-md-3 footer-icon">
              <FontAwesomeIcon icon={faGooglePlus} />
            </div>
            <div className="col-md-3"></div>
          </div>
          <p className="footer-call">Call Now</p>
          <button className="footer-button">+2025550295</button>
        </div>
      </div>
      <div className="copyright text-center">
         <p>Copyright {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
