import React, { useState } from "react";
import Delayed from "./Delayed";
import "./TextEffect.scss";

const TextEffect = ({ children, time, className }) => {
  return (
    <Delayed time={time} firstClass={`textEffect`} secondClass="textEffect ">
      {children}
    </Delayed>
  );
};

export default TextEffect;
