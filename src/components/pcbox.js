import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./PokemonCard";

const Pokemons = ({ setMessage }) => {
  const [pokemons, setPokemons] = useState();
  // Le use effect se joue lorsque le composant est monté.
  useEffect(() => {
    axios
      .get("https://bryanhuvelin.fr/pc", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // On récupère les données de l'API
        setPokemons(res.data.pc);
        setMessage([res.data.message, "info"]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="pokemons">
        <ul>
          {pokemons
            ? pokemons[0] == null
              ? "Vide"
              : pokemons
                  .sort((b, a) => b.id - a.id)
                  .map((pokemon, index) => (
                    <Card key={index} pokemon={pokemon} />
                  ))
            : "Loading..."}
        </ul>
      </div>
    </>
  );
};

export default Pokemons;
