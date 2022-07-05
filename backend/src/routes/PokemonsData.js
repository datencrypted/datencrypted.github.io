const ApiModel = require("../models/ApiModel");
axios = require("axios");

// use axios to fetch data from pokeapi (id,name,hp,cp,picture,array types)
module.exports = (app) => {
  app.get("/api/pokemons/data", async (req, res) => {
    ApiModel.deleteMany({}).then(
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(async (response) => {
          const pokemons = await response.data.results;
          for (let i = 1; i <= pokemons.length + 1; i++) {
            await axios
              .get("https://pokeapi.co/api/v2/pokemon-species/" + [i] + "/")
              .then(async (response) => {
                const pokemon = await response.data;
                const name = pokemon.names[4].name;
                const id = pokemon.id;
                var shiny = null;
                var picture = Math.floor(Math.random() * 150) + 1;
                if (picture < 150) {
                  picture =
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                    id +
                    ".png";
                  shiny = null;
                } else {
                  picture =
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
                    id +
                    ".png";
                  shiny = "Shiny !";
                }
                const pokemondata = {
                  name: name,
                  id: id,
                  picture: picture,
                  shiny: shiny,
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
                    // function selectProps(...pokemon) {
                    //   return function (obj) {
                    //     const newObj = {};
                    //     pokemon.forEach((name) => {
                    //       newObj[name] = obj[name];
                    //     });

                    //     return newObj;
                    //   };
                    // }
                    // const types = selectProps("types")(pokemon);
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
