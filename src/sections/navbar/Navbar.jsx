import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { backgroundColors } from "./data";
import BackgroundColor from "../../theme/BackgroundColor";
import Theme from "./../../theme/Theme";
import Delayed from "../../components/Delayed";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Navbar.scss";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const navBackground = () => {
    if (window.scrollY >= 100) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  };

  window.addEventListener("scroll", navBackground);
  return (
    <Delayed time={4000} firstClass="hide" secondClass="hide show">
      <nav
        className={navActive ? "navigation navigation--active" : "navigation"}
      >
        <a href="#" className="navigation__logo">
          <Logo className="navigation__logo-svg" />
        </a>
        <div className="navigation__theme">
          <Theme />
        </div>
        <div className="navigation__menu">
          <div className="navigation__mode">
            <BackgroundColor backgroundColors={backgroundColors} />
          </div>
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />

          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon"></span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Home
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Services
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Tours
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </Delayed>
  );
};

export default Navbar;
