import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";
import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
          <div className="about__cv">
            <a
              href={CV}
              className="btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV <HiDownload />
            </a>
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <p>
            I am passionate about creating high-quality, performant applications
            that provide an excellent user experience. I am always eager to
            learn new technologies and techniques to improve my skills and keep
            up with industry trends. I enjoy working in a collaborative team
            environment and believe that open communication and teamwork are
            crucial to the success of any project. I'm excited to bring my
            skills and enthusiasm to a company where I can continue to grow and
            be an asset to the team.
          </p>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
