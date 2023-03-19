import Delayed from "./Delayed";
import "./LineDraw.scss";

const LineDraw = ({ children, time, className }) => {
  return (
    <Delayed
      time={time}
      className={className}
      firstClass="line--draw"
      secondClass="line--draw line--draw-motion"
    >
      {children}
    </Delayed>
  );
};

export default LineDraw;
