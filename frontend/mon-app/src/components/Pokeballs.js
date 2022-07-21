import React from "react";

const Pokeballs = ({ pokeball, selectedRadio, setSelectedRadio }) => {
  return pokeball.map((pokeball, index) => {
    return (
      <li key={index}>
        <input
          type="radio"
          id={pokeball.id}
          name="itemRadio"
          checked={selectedRadio === pokeball.name}
          onChange={() => setSelectedRadio(pokeball.name)}
        />
        <img src={pokeball.picture} alt={pokeball.name} />
        <label htmlFor={pokeball.id}>
          {pokeball.name}
          {" x "}
          {pokeball.quantity}&nbsp;
        </label>
      </li>
    );
  });
};

export default Pokeballs;
