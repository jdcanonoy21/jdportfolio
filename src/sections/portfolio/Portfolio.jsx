import { useState } from "react";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import "./Portfolio.scss";

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
    <section id="portfolio">
      <div className="portfolio__container">
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProjects={handleFilterProjects}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
