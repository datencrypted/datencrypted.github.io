import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Pokemon = () => {
  const randomId = (max) => {
    var random = Math.floor(Math.random() * max) + 1;
    return random;
  };

  const [pokemon, setPokemon] = useState([]);

  const [pokeball, setPokeball] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = selectedRadio;
  const [message, setMessage] = useState("");
  const [displayflex, setDisplay] = useState("none");
  const [displaynone, setDisplay2] = useState("flex");

  useEffect(() => {
    console.log(1);
    let random = randomId(151);
    axios.get(`http://localhost:3001/api/items`).then((res) => {
      setPokeball(res.data);

      axios.get("http://localhost:3001/api/pokemon/" + random).then((res) => {
        setPokemon(res.data);
      });
    });
  }, []);
  //select a Pokeball

  const NewEncounter = () => {
    let random = randomId(151);
    axios.get("http://localhost:3001/api/pokemon/" + random).then((res) => {
      setPokemon(res.data);

      setTimeout(setMessage(""), 3000);
    });
  };
  console.log(2);
  const Catch = () => {
    if (selectedRadio === "") {
      setDisplay("flex");
      setDisplay2("none");
    } else {
      axios
        .post("http://localhost:3001/api/pokemons/catch/" + pokemon[0].id, {
          pokeball: radios,
        })
        .then((res) => {
          setMessage(res.data.message);
          axios.get(`http://localhost:3001/api/items`).then((res) => {
            setPokeball(res.data);
          });
        });
    }
  };

  // Le use effect se joue lorsque le composant est monté.

  return (
    <>
      <div className="pokeball-container">
        <div className="buttons">
          <button onClick={Catch}>Catch</button>
          <button onClick={NewEncounter}>New Encounter</button>
        </div>
        <div style={{ display: displayflex }} className="pokeballselected">
          {pokeball.map((item, number) => (
            <li key={number.toString()}>
              <input
                type="radio"
                id={item.name}
                name="itemRadio"
                checked={selectedRadio === item.name}
                onChange={(e) => setSelectedRadio(e.target.id)}
                style={{}}
              />
              <img src={item.picture} alt={item.name} />
              <label htmlFor={item}>
                {item.name}
                {" x "}
                {item.quantity}
              </label>
            </li>
          ))}
        </div>
        <div style={{ display: displaynone }} className="Items">
          <p>Quantity :</p>
          <ul>
            {pokeball.map((item, index) => (
              <li key={index}>
                <img src={item.picture} alt={item.name} />
                <div className="infos">
                  <p>{item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="Encounter">
        <div className="Wild_Pokemon">
          <p>{message}</p>
          {/* <h2>{pokemon[0].name}</h2> */}
          {console.log(pokemon)}
          <ul>
            {pokemon
              .sort((b, a) => b.id - a.id)
              .map((pokemon, index) => (
                <Card key={index} pokemon={pokemon} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
