import './Header.scss';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';

const Header = () => {
  return (
    <section className="header" id="header">
      <div className="header__container">
        <div className="header__main">
          <Fade bottom>
            <div className="header__greetings">Hi, my name is</div>
          </Fade>
          <Fade bottom>
            <h1>Jason Delle Canonoy</h1>
          </Fade>
          <Fade bottom>
            <h2>
              <Typewriter
                options={{
                  strings: [
                    'Web developer',
                    'Web Designer',
                    'Graphic designer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </Fade>
          <Fade bottom>
            <div className="header__desc">
              I design and build websites that are modern, powerful and
              responsive to any devices.
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Header;
