import IntersectionObserverComponent from "../../hooks/Observer";
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div className="container portfolio__projects">
      {projects.map((project) => (
        <IntersectionObserverComponent
          firstClassName="line--draw line--draw-motion"
          secondClassName="line--draw"
        >
          <Project key={project.id} {...project} />
        </IntersectionObserverComponent>
      ))}
    </div>
  );
};

export default Projects;
