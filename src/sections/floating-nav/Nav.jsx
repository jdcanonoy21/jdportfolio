import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ className, item }) => {
  return (
    <li className={className}>
      <Link to={item.link}>{item.icon}</Link>
    </li>
  );
};

export default Nav;
