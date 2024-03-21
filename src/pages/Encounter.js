import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokeballs from "../components/Pokeballs";
import WildPokemon from "../components/WildPokemon";
import Buttons from "../components/Buttons";

const Encounter = ({ setMessage }) => {
  ////////////////////// CONSTS  /////////////////////////////////
  let activePokemon = sessionStorage.getItem("activePokemon");
  //pokemon Object
  const [pokemon, setPokemon] = useState();
  //Pokeball Object
  const [pokeballs, setPokeballs] = useState([]);
  //Pokeball selected
  const [selectedRadio, setSelectedRadio] = useState("");
  const token = localStorage.getItem("token");
  //////////////////////// FONCTIONS/////////////////////////////////
  //Generates a random number between 1 and "max"
  const randomId = (max) => {
    var random = Math.floor(Math.random() * max) + 1;
    return random;
  };
  //get a new pokemon in pokemon Object
  const NewEncounter = () => {
    let random = randomId(151);
    axios
      .get("https://bryanhuvelin.fr/pokemon/" + random, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setPokemon(res.data.pokemon);
        sessionStorage.setItem(
          "activePokemon",
          JSON.stringify(res.data.pokemon)
        );
      })
      .catch((err) => console.log(err));
  };
  //Tries to catch the pokemon
  const Catch = () => {
    if (selectedRadio === "") {
      setMessage(["Please select a Pokeball", "error"]);
    } else {
      axios
        //post the selected pokeball, the pokemon to the API and the token in headers
        .post(
          "https://bryanhuvelin.fr/pokemons/catch/" + pokemon.id,
          {
            pokeball: selectedRadio,
            shiny: pokemon.shiny,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          setMessage([res.data.message, "info"]);
          axios
            .get("https://bryanhuvelin.fr/items", {
              headers: {
                Authorization: "Bearer " + token,
              },
            })
            .then((res) => {
              setPokeballs(res.data.items);
            })
            .catch((err) => console.log(err));
          if (res.data.flee || res.data.pokemon) {
            NewEncounter();
          }
        })
        .catch((err) => console.log(err));
    }
  };
  ////////////////////////FIRST RENDER DOES THIS///////////
  useEffect(() => {
    function checkPokemon() {
      //If pokemon Object is empty go get infos
      if (!activePokemon) {
        NewEncounter();
      } else {
        setPokemon(JSON.parse(activePokemon));
      }
    }
    checkPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //useEffect pokeball
  useEffect(() => {
    axios
      .get("https://bryanhuvelin.fr/items", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setPokeballs(res.data.items);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  ////////////////////////WHAT IS RENDERED//////////////////////
  return (
    <div className="Encounter">
      <Buttons Catch={Catch} NewEncounter={NewEncounter} />
      {pokeballs ? (
        <Pokeballs
          pokeballs={pokeballs}
          setPokeballs={setPokeballs}
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
        />
      ) : (
        "Loading..."
      )}
      {pokemon ? (
        <WildPokemon Catch={Catch} pokemon={pokemon}></WildPokemon>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Encounter;
