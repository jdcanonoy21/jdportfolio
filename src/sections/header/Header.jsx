import { Link } from "react-router-dom";
import { primaryColors, backgroundColors } from "./data";
import data from "./data";
import PrimaryColor from "../../theme/PrimaryColor";
import BackgroundColor from "../../theme/BackgroundColor";
import "./header.css";

const Header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <h1>Jason Delle Canonoy</h1>
        <p>I am a graphic designer, UX/UI designer & web developer</p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="theme">
          <div className="theme__primary-colors">
            {primaryColors.map((pColor) => (
              <PrimaryColor
                key={pColor.className}
                className={pColor.className}
              />
            ))}
          </div>
          <div className="theme__background-colors">
            {backgroundColors.map((bColor) => (
              <BackgroundColor
                key={bColor.className}
                className={bColor.className}
              />
            ))}
          </div>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
