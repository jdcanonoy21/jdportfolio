import { ReactComponent as Logo } from "../../assets/logo.svg";
// import Logo from "../../components/Logo";
import CardFlip from "../../components/CardFlip";
import LineDraw from "../../components/LineDraw";
import ArrowDown from "../../components/ArrowDown";
import "./Header.scss";

const Header = () => {
  return (
    <section className="header" id="header">
      <CardFlip front={<Logo className="header__logo" />}>
        <div className="header__container">
          <LineDraw time="2500" className="header__greetings">
            Hi, my name is
          </LineDraw>
          <LineDraw time="3500" className="header__main">
            <h1>Jason Delle Canonoy</h1>

            <h2>I am a frontend developer</h2>
          </LineDraw>
          <LineDraw time="3000" className="header__desc">
            I am a Cebu-based frontend developer and graphic designer with
            experience in both print and digital design.
          </LineDraw>
          <ArrowDown link="about" time="8000" />
        </div>
      </CardFlip>
    </section>
  );
};

export default Header;
