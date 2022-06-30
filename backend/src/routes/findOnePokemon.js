// const PokemonModel = require("../models/pokemons");
// // connect to mongodb and fetch one pokemon from url id
// module.exports = (app) => {
//   // app is an express instance
//   app.get("/api/pokemons/:id", (req, res) => {
//     PokemonModel.find({ id: req.params.id })
//       .then((pokemon) => {
//         res.json(pokemon);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   });
// };
