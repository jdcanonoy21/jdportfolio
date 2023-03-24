import React from "react";
import "./Card.scss";

const Card = ({ className, children, header }) => {
  return (
    <div className={`card ${className}`}>
      <header className="card__header">{header}</header>
      <div className="card__body">{children}</div>
    </div>
  );
};

export default Card;
