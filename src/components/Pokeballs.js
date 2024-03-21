import React, { useState } from "react";

const Pokeballs = ({ pokeballs, setSelectedRadio }) => {
  const [active, setActive] = useState("");
  function clickHandler(item) {
    setSelectedRadio(item);
    setActive(item);
  }

  return (
    <div className="pokeballs-container">
      {pokeballs.map((pokeball, index) => {
        return (
          <div key={index}>
            <label htmlFor={pokeball.id}>
              {pokeball.name}
              {" x "}
              {pokeball.quantity}&nbsp;
            </label>

            <button
              className={active === pokeball.name ? "active" : ""}
              onClick={() => clickHandler(pokeball.name)}
            >
              <img src={pokeball.picture} alt={pokeball.name} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Pokeballs;
