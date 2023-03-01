import { links, socials } from "./data";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <ul className="nav__menu">
          {links.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          {socials.map((item) => (
            <Link key={item.id} to={item.link}>
              {item.icon}
            </Link>
          ))}
        </div>
        <div className="footer__copyright">
          <small>2022 JD Canonoy &copy;</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
