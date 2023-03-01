import Card from "../../components/Card";
import { Link } from "react-router-dom";

const Project = (props) => {
  const { title, image, desc } = props;
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={image} alt="Project Project Image" />
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="portfolio__project-cta">
        <Link to="#" className="btn sm">
          Demo
        </Link>
        <Link to="#" className="btn sm primary">
          Github
        </Link>
      </div>
    </Card>
  );
};

export default Project;
