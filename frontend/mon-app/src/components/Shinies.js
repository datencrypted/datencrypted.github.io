import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./PokemonCard";

const Pokemons = () => {
  const ShinyReq = {
    shiny: "Shiny",
  };
  const [data, setData] = useState([]);
  const ClickHandler = () => {
    axios
      .post("http://localhost:3001/api/pokemons/randomizer", ShinyReq)
      .then((res) => {
        setData(res.data);
      });
  };
  // Le use effect se joue lorsque le composant est monté.
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/pokemons/fetch", ShinyReq)
      .then((res) => {
        // On récupère les données de l'API
        setData(res.data); // On affiche les données de l'API
      });
  }, []);
  return (
    <>
      <button onClick={ClickHandler}>Shiny Randomizer</button>
      <div className="pokemons">
        <ul>
          {data
            .sort((b, a) => b.id - a.id)
            .map((pokemon, index) => (
              <Card key={index} pokemon={pokemon} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default Pokemons;
