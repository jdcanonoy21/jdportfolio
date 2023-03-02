import { ReactComponent as Logo } from "../../assets/logo.svg";
import data from "./data";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="/" className="nav__logo">
          <Logo className="nav__logo-svg" />
        </a>
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
