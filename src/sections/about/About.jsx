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
          <p>
            I am always eager to learn new technologies and techniques to
            improve my skills and keep up with industry trends. I enjoy working
            in a collaborative team environment and believe that open
            communication and teamwork are crucial to the success of any
            project.
          </p>
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
