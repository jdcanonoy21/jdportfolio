import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { backgroundColors, data } from "./data";
import BackgroundColor from "../../theme/BackgroundColor";
import Theme from "./../../theme/Theme";
import Delayed from "../../components/Delayed";
import "./Navbar.scss";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [menuNav, setMenuNav] = useState(false);

  const navBackground = () => {
    if (window.scrollY >= 100) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  };

  const handleNavClick = () => {
    setMenuNav(!menuNav);
  };

  const handlePageNavClick = (e, nav) => {
    e.preventDefault();
    setMenuNav(!menuNav);
    window.location.href = nav;
  };

  useEffect(() => {
    console.log("from nav");
  }, [menuNav]);

  window.addEventListener("scroll", navBackground);
  return (
    <Delayed time={4000} firstClass="hide" secondClass="hide show">
      <nav
        className={navActive ? "navigation navigation--active" : "navigation"}
      >
        <Link href="#" className="navigation__logo">
          <Logo className="navigation__logo-svg" />
        </Link>
        <div className="navigation__theme">
          <Theme />
        </div>
        <div className="navigation__menu">
          <div className="navigation__mode">
            <BackgroundColor backgroundColors={backgroundColors} />
          </div>
          <input
            onChange={handleNavClick}
            checked={menuNav}
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
              {data.map((item) => (
                <li className="navigation__item" key={item.id}>
                  <Link
                    to={item.link}
                    className="navigation__link"
                    onClick={(e) => handlePageNavClick(e, item.link)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </nav>
    </Delayed>
  );
};

export default Navbar;
