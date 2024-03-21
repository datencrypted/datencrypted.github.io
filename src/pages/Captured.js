import React from "react";
import Pokedex from "../components/pcbox";

const Captured = ({ setMessage }) => {
  return (
    <div className="pokedex">
      <Pokedex setMessage={setMessage} />
    </div>
  );
};

export default Captured;
