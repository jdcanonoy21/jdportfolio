import { Link } from 'react-router-dom';
import './Portfolio.scss';
import Fade from 'react-reveal/Fade';

const Project = (props) => {
  const { title, image, desc, alt, demo, github, tools } = props;
  return (
    <div className="portfolio__project-content">
      <Fade bottom>
        <div className="portfolio__project-content-left">
          <div className="portfolio__project-image">
            <img src={image} alt={alt} />
          </div>
        </div>
        <div className="portfolio__project-content-right">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="portfolio__project-tools">
            {tools.map((tool, i) => {
              return <span key={i}>{tool}</span>;
            })}
          </div>
          <div className="portfolio__project-cta">
            {demo && (
              <Link to={demo} className="btn sm">
                Demo
              </Link>
            )}
            {github && (
              <Link to={github} className="btn sm">
                Github
              </Link>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Project;
