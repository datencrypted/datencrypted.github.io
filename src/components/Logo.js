import React from "react";
import { NavLink } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <img src="./pokemon.png" alt="logo Pokemon" />
      </NavLink>
    </div>
  );
};

export default Logo;
