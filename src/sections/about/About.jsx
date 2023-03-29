import AboutImage from '../../assets/about.jpg';
import CV from '../../assets/cv.pdf';
import IntersectionObserverComponent from '../../hooks/Observer';
import Fade from 'react-reveal/Fade';
import './About.scss';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="about">
      <Fade bottom>
        <div className="about__header">
          <div className="heading__secondary">
            <h3>About</h3>
          </div>
        </div>
        <div className="about__container">
          <div className="about__left">
            <p className="about__content">
              Hello, I'm Jason. After graduating, I landed a job at a printing
              press company where I worked for 2 years, followed by another year
              at a Korean newspaper. During this time, I honed my design skills
              in areas such as colors, typography, and software tools like
              Photoshop, InDesign, and Illustrator. <br /> <br /> After that, I
              spent 8 years working as a web and graphic designer for a software
              development company. In this role, I designed logos, brochures,
              banners, websites, and other marketing materials. Additionally, I
              also served as an assistant trainer, helping to deploy software
              and provide training to users on how to use it.
            </p>
            <IntersectionObserverComponent
              firstClassName="textEffect textEffect__cover"
              secondClassName=" textEffect"
            >
              <div className="about__right-cta ">
                <Link
                  to={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn--about btn--primary"
                >
                  Download CV
                </Link>
              </div>
            </IntersectionObserverComponent>
          </div>
          <div className="about__right">
            <IntersectionObserverComponent
              firstClassName="line--draw line--draw-motion "
              secondClassName="line--draw"
            >
              <div className="about__image">
                <img src={AboutImage} alt="" />
              </div>
            </IntersectionObserverComponent>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
