const ApiModel = require("../models/PokemonsModel");
axios = require("axios");

// use axios to fetch data from pokeapi (id,name,hp,cp,picture,array types)
module.exports = (app) => {
  app.get("/api/pokemons/data", async (req, res) => {
    ApiModel.deleteMany({}).then(
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(async (response) => {
          const pokemons = await response.data.results;
          for (let i = 1; i <= pokemons.length; i++) {
            await axios
              .get("https://pokeapi.co/api/v2/pokemon-species/" + [i] + "/")
              .then(async (response) => {
                const pokemon = await response.data;
                const name = pokemon.names[4].name;
                const id = pokemon.id;
                var picture =
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                  id +
                  ".png";
                const pokemondata = {
                  name: name,
                  id: id,
                  picture: picture,
                  shiny: false,
                  catched: false,
                };
                const newPokemon = pokemondata;

                ApiModel.create(newPokemon).then(
                  console.log("pokemon n°" + id + "created")
                );
                axios
                  .get("https://pokeapi.co/api/v2/pokemon/" + [i] + "/")
                  .then(async (response) => {
                    // get pokemons types and update pokemons

                    const pokemon = response.data;
                    const id = pokemon.id;
                    const types = pokemon.types.map((type) => type.type.name);
                    const pokemondata = {
                      id: id,
                      types: types,
                    };
                    const Pokemonupdate = pokemondata;
                    ApiModel.findOneAndUpdate(
                      { id: id },
                      { $set: Pokemonupdate }
                    )
                      .then(console.log("pokemon n°" + pokemon.id + "updated"))
                      .catch((err) => console.log(err));
                  });
              });
          }
        })
    );
  });
};
