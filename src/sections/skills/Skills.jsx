import data from "./data";
import "./Skills.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <h2 className="heading__secondary">&lt; 02. Skills &gt;</h2>
      </div>
      <div className="skills__container">
        {data.map((skills) => {
          return (
            <div className="skills__frontend" key={skills.id}>
              <h2 className="heading__secondary">&lt; {skills.title} &gt;</h2>
              <h3 className="heading__sub">{skills.name} Tools :</h3>
              <ul className="heading__list">
                {skills.tools.map((tool, index) => {
                  return <li key={index}>{tool}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="skills__arrow"></div>
    </section>
  );
};

export default Skills;
