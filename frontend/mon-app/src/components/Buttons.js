import React from "react";
import axios from "axios";

export const Buttons = ({
  randomId,
  setPokemon,
  setMessage,
  selectedRadio,
  pokemon,
  radios,
  setPokeball,
}) => {
  const NewEncounter = () => {
    let random = randomId(151);
    axios.get("http://localhost:3001/api/pokemon/" + random).then((res) => {
      setPokemon(res.data);
      setTimeout(setMessage(""), 3000);
    });
  };

  const Catch = () => {
    if (selectedRadio === "") {
      setMessage("Please select a Pokeball");
    } else {
      axios
        .post("http://localhost:3001/api/pokemons/catch/" + pokemon[0].id, {
          pokeball: radios,
          shiny: pokemon[0].shiny,
        })
        .then((res) => {
          setMessage(res.data.message);
          axios.get(`http://localhost:3001/api/items`).then((res) => {
            setPokeball(res.data);
          });
        });
    }
  };

  return (
    <div className="buttons">
      <button onClick={Catch}>Catch</button>
      <button onClick={NewEncounter}>New Encounter</button>
    </div>
  );
};
