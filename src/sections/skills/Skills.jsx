import ArrowDown from "../../components/ArrowDown";
import IntersectionObserverComponent from "../../hooks/Observer";
import data from "./data";
import "./Skills.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <IntersectionObserverComponent
          firstClassName="line--draw line--draw-motion"
          secondClassName="line--draw"
        >
          <h2 className="heading__secondary">&lt; 02. Skills &gt;</h2>
        </IntersectionObserverComponent>
      </div>
      <div className="skills__container">
        {data.map((skills) => {
          return (
            <IntersectionObserverComponent
              firstClassName="line--draw line--draw-motion textEffect textEffect__cover"
              secondClassName="line--draw textEffect"
            >
              <div className="skills__frontend" key={skills.id}>
                <h2 className="heading__secondary">&lt; {skills.title} &gt;</h2>
                <h3 className="heading__sub">{skills.name} Tools :</h3>
                <ul className="heading__list">
                  {skills.tools.map((tool, index) => {
                    return <li key={index}>{tool}</li>;
                  })}
                </ul>
              </div>
            </IntersectionObserverComponent>
          );
        })}
      </div>
      <div className="skills__arrow">
        <ArrowDown link="portfolio" />
      </div>
    </section>
  );
};

export default Skills;
