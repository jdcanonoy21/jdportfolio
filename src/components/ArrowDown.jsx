import { Link } from "react-router-dom";
import "./ArrowDown.scss";
import Delayed from "./Delayed";

const ArrowDown = ({ link, time }) => {
  return (
    <Delayed time={time} firstClass="hide" secondClass="hide show">
      <div className="arrow">
        {/* <button className="btn btn--primary">Get In Touch</button> */}
        <Link to={`#${link}`}>
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </div>
    </Delayed>
  );
};

export default ArrowDown;
