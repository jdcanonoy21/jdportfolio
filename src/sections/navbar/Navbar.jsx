import Logo from "../../assets/logo.png";
import data from "./data";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
