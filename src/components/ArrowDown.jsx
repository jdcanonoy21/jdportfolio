import { Link } from "react-router-dom";
import "./ArrowDown.scss";
import Delayed from "./Delayed";

const ArrowDown = ({ link, time }) => {
  const handleArrow = (e, section) => {
    e.preventDefault();
    window.location.href = section;
  };

  return (
    <Delayed time={time} firstClass="hide" secondClass="hide show">
      <div className="arrow">
        <Link to={`#${link}`} onClick={(e) => handleArrow(e, `#${link}`)}>
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </div>
    </Delayed>
  );
};

export default ArrowDown;
