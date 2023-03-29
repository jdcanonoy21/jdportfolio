import { useState } from 'react';
import Projects from './Projects';
import ProjectsCategories from './ProjectsCategories';
import data from './data';
import './Portfolio.scss';
import Fade from 'react-reveal/Fade';

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map((item) => item.category);
  const uniqueCategories = ['all', ...new Set(categories)];

  const handleFilterProjects = (category) => {
    if (category === 'all') {
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__header">
        <Fade bottom>
          <div className="heading__secondary">
            <h3>Projects</h3>
          </div>
        </Fade>
      </div>
      <div className="portfolio__container">
        <Fade bottom>
          <ProjectsCategories
            categories={uniqueCategories}
            onFilterProjects={handleFilterProjects}
          />
        </Fade>
        <Fade bottom>
          <Projects projects={projects} />
        </Fade>
      </div>
    </section>
  );
};

export default Portfolio;
