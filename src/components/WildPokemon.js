import React from "react";

const WildPokemon = ({ pokemon, Catch }) => {
  return (
    <div className="Wild_Pokemon">
      {pokemon.shiny && <p>Shiny!!</p>}
      <>
        <div className="info">
          {pokemon.catched && (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"
              alt={"Captured"}
            />
          )}
          <h2>
            {pokemon.name}
            {pokemon.shiny && <img width="20px" src="Shiny.png" alt="Shiny" />}
          </h2>
        </div>
        <img
          onClick={Catch}
          className="pokemon_image"
          src={pokemon.picture}
          alt={pokemon.name}
        ></img>
      </>
    </div>
  );
};

export default WildPokemon;
