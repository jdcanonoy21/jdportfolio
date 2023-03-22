import SplashLogo from "../../components/SplashLogo";
import CardFlip from "../../components/CardFlip";
import "./Header.scss";

const Header = () => {
  return (
    <section className="header" id="header">
      <CardFlip front={<SplashLogo className="header__logo" />}>
        <div className="header__container">
          <div className="header__main">
            <div className="header__greetings">Hi, my name is</div>
            <h1>Jason Delle Canonoy</h1>

            <h2>I am a frontend developer</h2>
            <div className="header__desc">
              I am a Cebu-based frontend developer and graphic designer with
              experience in both print and digital design.
            </div>
          </div>
        </div>
      </CardFlip>
    </section>
  );
};

export default Header;
