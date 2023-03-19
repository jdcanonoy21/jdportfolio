import "./ArrowDown.scss";
import Delayed from "./Delayed";

const ArrowDown = ({ link, time }) => {
  return (
    <Delayed time={time} firstClass="hide" secondClass="hide show">
      <div className="arrow">
        {/* <button className="btn btn--primary">Get In Touch</button> */}
        <a href={`#${link}`}>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </Delayed>
  );
};

export default ArrowDown;
