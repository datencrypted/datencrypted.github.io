const { Pokemon } = require("../db/mongo");

module.exports = (app) => {
  app.get("/api/pokemons", (req, res) => {
    findAllPokemons: (req, res, next) => {
      Pokemon.findAll().then((pokemons) => {
        const message = "Pokemons trouvés !";
        res.json({ message, data: pokemons });
      });
    };
  });
};
