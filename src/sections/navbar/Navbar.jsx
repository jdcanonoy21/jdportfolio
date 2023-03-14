import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import About from "./../about/About";
import Portfolio from "./../portfolio/Portfolio";
import "./Navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  const handleCLick = () => setClick(!click);

  useEffect(() => {
    const flipTimeout = setTimeout(() => {
      frontRef.current &&
        (frontRef.current.style.transform = "rotateY(-180deg)");
      backRef.current && (backRef.current.style.transform = "rotateY(0deg)");

      setTimeout(() => {
        frontRef.current && (frontRef.current.style.transform = "");
        backRef.current && (backRef.current.style.transform = "");
      }, 1000);
    }, 1000);

    return () => {
      clearTimeout(flipTimeout);
    };
  }, []);

  return (
    <>
      <nav className="navigation">
        <div className="side">
          <div className="side__container side__container-front" ref={frontRef}>
            <a href="#" className="navigation__logo">
              <Logo className="navigation__logo-svg" />
            </a>
          </div>
          <div
            className="side__container side__container-back side__container-back-1"
            ref={backRef}
          >
            <input
              type="checkbox"
              className="navigation__checkbox"
              id="navi-toggle"
              onClick={handleCLick}
            />
            <label htmlFor="navi-toggle" className="navigation__button">
              <span className="navigation__icon"></span>
            </label>

            <div className="navigation__background">&nbsp;</div>
          </div>
        </div>
        <div
          className={
            click ? "navigation__nav navigation__nav-show" : "navigation__nav"
          }
        >
          <About />
          <Portfolio />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
