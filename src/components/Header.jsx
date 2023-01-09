import React from "react";
import logo from "../assets/logo.webp";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <a href="#">
        <img src={logo} />
      </a>
      <a href="#" className="headerObj">
        ABOUT US
      </a>
      <a href="#" className="headerObj">
        ORIGINS
      </a>
      <a href="#" className="headerObj">
        BENEFITS
      </a>
      <a href="#" className="headerObj">
        FAQS
      </a>
      <div className="headerLinks">
        <div className="social">
          <img src="twitter" />
          twitter
        </div>
        <div className="social">
          <img src="opensea" />
          opensea
        </div>
        <div src="discord" className="social">
          discord
        </div>
      </div>
    </div>
  );
}
