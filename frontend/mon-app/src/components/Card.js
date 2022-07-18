import React from "react";

const Card = ({ pokemon }) => {
  return (
    <li className="card">
      <div className="card-image">
        <img src={pokemon.picture} alt={"pokemon" + pokemon.name} />
        <div className="infos">
          <h2>{pokemon.name}</h2>
          <h4>{pokemon.shiny}</h4>
          <h4>ID: {pokemon.id}</h4>
          <h4>
            Types :
            {pokemon.types.map((type, index) => (
              <span key={index}> {type} </span>
            ))}
          </h4>
        </div>
      </div>
    </li>
  );
};

export default Card;
