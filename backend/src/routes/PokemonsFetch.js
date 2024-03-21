const PokemonsModel = require("../models/PokemonsModel");
const userModel = require("../models/userModel");
const { protect } = require("../middleware/authMiddleware");

// use axios to fetch pokemons from database

module.exports = (app) => {
  app.get("/pokemons/fetch", protect, async (req, res) => {
    const username = req.user.username;
    //fetch all pokemons from PokemonsModel and add catched property if pokemon is in user.pc
    const pokemons = await PokemonsModel.find({}).sort({ id: 1 });
    const user = await userModel.findOne({ username: username });
    const pc = user.pc;
    const pcIds = pc.map((pokemon) => pokemon.id);
    const pokemonsWithCatched = pokemons.map((pokemon) => {
      if (pcIds.includes(pokemon.id)) {
        pokemon.catched = true;
      }
      return pokemon;
    });
    const message = "Here is the list of all pokemons";
    res.json({ message, pokemons: pokemonsWithCatched });
  });
};
