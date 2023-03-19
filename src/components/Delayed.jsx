import React, { useState, useEffect } from "react";
import "./Delayed.scss";

const Delayed = ({
  time = 1,
  children,
  firstClass,
  secondClass,
  className = "",
}) => {
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    const setTimeOut = setTimeout(() => setDelay(false), time);

    return () => {
      clearTimeout(setTimeOut);
    };
  }, []);
  return (
    <div className={className + " " + (delay ? firstClass : secondClass)}>
      {children}
    </div>
  );
};

export default Delayed;
