import data from './data';
import './Skills.scss';
import Card from './../../components/Card';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        {data.map((skills) => {
          return (
            <Card className={skills.name} key={skills.id}>
              <div className="skills__frontend">
                <h2 className="heading__secondary"> {skills.title}</h2>
                <ul className="heading__list">
                  {skills.tools.map((tool, i) => {
                    return <li key={i}>{tool}</li>;
                  })}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="skills__arrow"></div>
    </section>
  );
};

export default Skills;
