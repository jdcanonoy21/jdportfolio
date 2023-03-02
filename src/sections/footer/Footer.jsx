import { socials } from "./data";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__socials">
          {socials.map((item) => (
            <a key={item.id} href={item.link}>
              {item.icon}
            </a>
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
