import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SnubesLogo } from "../images/snubes-logo.svg";
import { ReactComponent as SnubesLogoTablet } from "../images/snubes-logo-tablet.svg";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isDesktop = windowWidth >= 768 ? true : false;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          {isDesktop && <SnubesLogo></SnubesLogo>}
          {!isDesktop && <SnubesLogoTablet></SnubesLogoTablet>}
        </div>
        <div className="navbar-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="navbar-link">About Us</p>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="navbar-link">Become a Partner</p>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="navbar-link">EUR</p>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="navbar-link">EN</p>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="navbar-link">Sign In</p>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="navbar-link">Get Access</p>
          </Link>
        </div>
        <div>
          <FaBars className="navbar-icon"></FaBars>
        </div>
      </div>
    </>
  );
}

export default Navbar;
