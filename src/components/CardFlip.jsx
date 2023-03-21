import React, { useState, useEffect } from "react";
import "./CardFlip.scss";

const CardFlip = ({ front, children }) => {
  const [bigLogo, setBigLogo] = useState(true);

  useEffect(() => {
    let cardFlip = setTimeout(() => setBigLogo(false), 4000);

    return () => clearTimeout(cardFlip);
  }, []);

  return (
    <div className="card-flip">
      <div
        className={
          bigLogo
            ? "card-flip__side card-flip__side--front "
            : "card-flip__side card-flip__side--frontFlip"
        }
      >
        {front}
      </div>
      <div
        className={
          bigLogo
            ? "card-flip__side card-flip__side--back card-flip__side--back-1"
            : "card-flip__side card-flip__side--backFlip"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default CardFlip;
