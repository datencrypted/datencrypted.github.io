import React, { FunctionComponent, useState, useEffect } from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';

const App: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <div>
            <h1>Pokédex</h1>
            {/* map pokemons with bootstrap */}
            <div className="row">
                {pokemons.map(pokemon => (
                    <div className="col-md-4 col-sm-6" key={pokemon.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{pokemon.name}</h5>
                                <img src={pokemon.picture} alt={pokemon.name} />
                                <p className="card-text">{pokemon.types}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App;