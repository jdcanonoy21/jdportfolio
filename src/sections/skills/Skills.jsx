import data from "./data";
import "./Skills.scss";
import Card from "./../../components/Card";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        {data.map((skills) => {
          return (
            <Card className={skills.name}>
              <div className="skills__frontend" key={skills.id}>
                <h2 className="heading__secondary"> {skills.title}</h2>
                <ul className="heading__list">
                  {skills.tools.map((tool, index) => {
                    return <li key={index}>{tool}</li>;
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
