import Project from './Project';
import Fade from 'react-reveal/Fade';

const Projects = ({ projects }) => {
  return (
    <div className="container portfolio__projects">
      <Fade bottom>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </Fade>
    </div>
  );
};

export default Projects;
