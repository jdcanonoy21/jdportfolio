import data from "./data";
import Delayed from "./Delayed";
import "./Socials.scss";

const Socials = () => {
  return (
    <Delayed time="6000" firstClass="hide" secondClass="hide show">
      <div className="socials">
        {data.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
        <span className="socials__line"></span>
      </div>
    </Delayed>
  );
};

export default Socials;
