import "./Header.scss";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <section className="header" id="header">
      <div className="header__container">
        <div className="header__main">
          <div className="header__greetings">Hi, my name is</div>
          <h1>Jason Delle Canonoy</h1>

          <h2>
            <Typewriter
              options={{
                strings: [
                  "Frontend developer",
                  "Graphic designer",
                  "UI/UX designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="header__desc">
            I am a Cebu-based frontend developer and graphic designer with
            experience in both print and digital design.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
