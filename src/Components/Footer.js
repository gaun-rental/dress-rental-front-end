import React, { Fragment } from "react";
import "./Footer.css";
import Logo from "../Assets/Logo.png";
import Instagram from "../Assets/social/Instagram_white.png";
import Facebook from "../Assets/social/Facebook_white.png";
import Twitter from "../Assets/social/Twitter_white.png";
import Linkedin from "../Assets/social/LinkedIN_white.png";
import Youtube from "../Assets/social/Youtube_white.png";

function Footer() {
  return (
    <Fragment>
      <div className="cont-footer">
        <div className="cont-footer-dua">
          <img src={Logo} alt="logo" />
          <p className="text-footer-about">
            Browse the many inspirations for your wedding on Wearel and get
            connected directly to our best dresses. Set your own inspiration
            with the boards we have provided.
          </p>
          <p className="text-footer-about">©2020 Wearel. All rights reserved</p>
        </div>

        <div className="cont-footer-dua">
          <h1 className="text-footer-title">Services</h1>
          <p className="text-footer-list">Booking</p>
          <p className="text-footer-list">Renting</p>
          <p className="text-footer-list">Retail</p>
          <p className="text-footer-list">Listing</p>
          <p className="text-footer-list">Vendor</p>
        </div>

        <div className="cont-footer-dua">
          <h1 className="text-footer-title">Contact</h1>
          <p className="text-footer-list">
            Building Office 3 Jakarta, Indonesia
          </p>
          <p className="text-footer-list">Wearel@gmail.com</p>
          <p className="text-footer-list">+62858489433</p>
          <p className="text-footer-list">(0286) 394843</p>
        </div>

        <div className="cont-footer-dua">
          <h1 className="text-footer-title">General</h1>
          <p className="text-footer-list">News</p>
          <p className="text-footer-list">FAQ</p>
          <p className="text-footer-list">Career</p>
          <p className="text-footer-list">Term & Condition</p>
        </div>
      </div>
      <div className="cont-footer-social">
        <div className="cont-social">
          <div>
            <img className="pic" src={Instagram} alt="instagram" />
            <img className="pic" src={Facebook} alt="facebook" />
            <img className="pic" src={Twitter} alt="twitter" />
            <img className="pic" src={Linkedin} alt="linkedin" />
            <img className="pic" src={Youtube} alt="youtube" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
