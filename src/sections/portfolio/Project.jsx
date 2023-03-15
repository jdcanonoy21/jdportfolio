import Card from "../../components/Card";
import { Link } from "react-router-dom";

const Project = (props) => {
  const { title, image, desc, alt, demo, github } = props;
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={image} alt={alt} />
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="portfolio__project-cta">
        {demo && (
          <Link to={demo} className="btn sm" target="_blank">
            Demo
          </Link>
        )}
        {github && (
          <Link to={github} className="btn sm primary" target="_blank">
            Github
          </Link>
        )}
      </div>
    </Card>
  );
};

export default Project;
