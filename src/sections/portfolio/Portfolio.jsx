import { useState } from "react";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import ArrowDown from "../../components/ArrowDown";
import data from "./data";
import "./Portfolio.scss";
import IntersectionObserverComponent from "../../hooks/Observer";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const handleFilterProjects = (category) => {
    if (category === "all") {
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
        <IntersectionObserverComponent
          firstClassName="hide show"
          secondClassName="hide"
        >
          <h2 className="heading__secondary">&lt; 03. Projects &gt;</h2>
        </IntersectionObserverComponent>
      </div>
      <div className="portfolio__container">
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProjects={handleFilterProjects}
        />
        <Projects projects={projects} />
      </div>
      <div className="portfolio__arrow">
        <ArrowDown link="contact" />
      </div>
    </section>
  );
};

export default Portfolio;
