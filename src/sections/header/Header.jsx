import { useEffect } from "react";
import Theme from "../../theme/Theme";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="header">
      <div className="container header__container">
        <h1 data-aos="flip-up">Jason Delle Canonoy</h1>
        <p data-aos="zoom-in">
          I am a graphic designer, UX/UI designer & web developer
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <Theme />
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
