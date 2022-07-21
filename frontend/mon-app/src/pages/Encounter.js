import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Pokemon from "../components/Encounter";

const Battle = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Pokemon />
    </div>
  );
};

export default Battle;
