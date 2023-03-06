import Card from "../../components/Card";
import { Link } from "react-router-dom";

const Project = (props) => {
  const { title, image, desc, alt, demo } = props;
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={image} alt={alt} />
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="portfolio__project-cta">
        <Link to={demo} className="btn sm" target="_blank">
          Demo
        </Link>
        {/* <Link to="#" className="btn sm primary">
          Github
        </Link> */}
      </div>
    </Card>
  );
};

export default Project;
