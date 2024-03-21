import React from "react";

const Card = ({ pokemon }) => {
  return (
    <div id="pokemon_card">
      <div className="info_pokemon">
        {pokemon.catched && (
          <img
            width="20"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"
            alt={"Captured"}
          ></img>
        )}
        <h3>{pokemon.name}</h3>
        {pokemon.shiny && <img width="20" src="Shiny.png" alt={"Shiny"}></img>}
      </div>

      <li className="card">
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name + " picture"} />
          <div className="infos">
            <h3>
              {pokemon.name} <br />
              ID: {pokemon.id}
              <br />
              {pokemon.shiny ? "Shiny !" : null}
              <br />
              Types :
              {pokemon.types?.map((type, index) => (
                <span key={index}> {type} </span>
              ))}
            </h3>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Card;
