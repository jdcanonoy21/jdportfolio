import Project from './Project';

const Projects = ({ projects }) => {
  return (
    <div className="container portfolio__projects">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
};

export default Projects;
