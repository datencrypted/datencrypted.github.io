import React from "react";

import Pokemons from "../components/Pokemons";

const Liste = ({ setMessage }) => {
  return (
    <div className="liste">
      <Pokemons setMessage={setMessage} />
    </div>
  );
};

export default Liste;
