import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import Pokeballs from "./Pokeballs";
import { Buttons } from "./Buttons";
import MessageBox from "./MessageBox";

const Pokemon = () => {
  const randomId = (max) => {
    var random = Math.floor(Math.random() * max) + 1;
    return random;
  };
  const [pokemon, setPokemon] = useState([]);
  const [pokeball, setPokeball] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");

  const [message, setMessage] = useState("");
  const radios = selectedRadio;
  useEffect(() => {
    let random = randomId(151);
    axios.get(`http://localhost:3001/api/items`).then((res) => {
      setPokeball(res.data);

      axios.get("http://localhost:3001/api/pokemon/" + random).then((res) => {
        setPokemon(res.data);
      });
    });
  }, []);

  return (
    <>
      <div className="pokeball-container">
        <Buttons
          randomId={randomId}
          setPokemon={setPokemon}
          setMessage={setMessage}
          selectedRadio={selectedRadio}
          pokemon={pokemon}
          radios={radios}
          setPokeball={setPokeball}
        />
        <div className="pokeballselected">
          <Pokeballs
            pokeball={pokeball}
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
          />
        </div>
      </div>
      <div className="Encounter">
        <div className="Wild_Pokemon">
          <ul>
            <MessageBox message={message} />
            {pokemon[0] ? (
              <div>
                {pokemon[0].shiny && <p>Shiny!!</p>}
                <PokemonCard pokemon={pokemon[0]} />
              </div>
            ) : (
              <div id="loading">Loading...</div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
