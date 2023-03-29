import CategoryButton from './CategoryButton';
import { useState } from 'react';

const ProjectsCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleChangeCategory = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  };

  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => handleChangeCategory(category)}
          className={`btn cat__btn ${
            activeCategory === category ? 'primary' : 'white'
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
