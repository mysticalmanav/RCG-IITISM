// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import img from "./img/image-removebg-preview.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <span className="logo">
          <img src={img} alt="IIT ISM Logo" />
        </span>
        <div className="row">
          <div className="address">
            <strong>Address : </strong> Department of Mining Engineering, IIT
            (ISM) Dhanbad, Hirapur, Sardar Patel Nagar, Dhanbad, Jharkhand
            826004
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
