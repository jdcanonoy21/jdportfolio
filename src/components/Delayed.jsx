import React, { useState, useEffect } from 'react';
import './Delayed.scss';

const Delayed = ({ time = 1, children }) => {
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    const setTimeOut = setTimeout(() => setDelay(false), time);

    return () => {
      clearTimeout(setTimeOut);
    };
  }, []);
  return <div delay>{children}</div>;
};

export default Delayed;
