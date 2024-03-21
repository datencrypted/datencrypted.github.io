import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./PokemonCard";

const Pokemons = ({ setMessage }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredData, setFilteredData] = useState(false);
  const catched = pokemons.filter((pokemon) => pokemon.catched === true);

  const handleChange = (e) => {
    setFilteredData((current) => !current);
  };
  // Le use effect se joue lorsque le composant est monté.
  useEffect(() => {
    //Requete au backend (get all pokemons)
    axios
      .get("https://bryanhuvelin.fr/pokemons/fetch", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // On stock les données (res.data) de la requete dans la const pokemons (setPokemons)
        setPokemons(res.data.pokemons);
        setMessage([res.data.message, "info"]);
      })
      .catch((err) => console.log(err));
  }, [filteredData, setMessage]);

  return (
    <>
      <div className="filter_checkboxes">
        <h2>Filtres : </h2>
        <input
          type="checkbox"
          name="filter"
          value={filteredData}
          onChange={handleChange}
        />
        <label htmlFor="filter">Catched Pokemons</label>
      </div>{" "}
      <p> Pokémons attrapés: {catched.length} / 151</p>
      <div className="pokemons">
        <ul>
          {/* Si un filtre est activé, appliquer le filtre sur 'pokemons' sinon afficher tout */}
          {filteredData
            ? pokemons
                .filter((pokemon) => pokemon.catched === filteredData)
                .sort((b, a) => b.id - a.id)
                .map((pokemon, index) => <Card key={index} pokemon={pokemon} />)
            : pokemons
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
