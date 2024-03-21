const Pokemons = require("../models/PokemonsModel");
const userModel = require("../models/userModel");
const { protect } = require("../middleware/authMiddleware");

// create a new pokemon

module.exports = (app) => {
  app.post("/pokemons/catch/:id", protect, (req, res) => {
    const user = req.user.username;
    const pokeball = req.body.pokeball;
    const shiny = req.body.shiny;
    //check if user has enough pokeballs to catch a pokemon
    userModel
      .findOne({ username: user })
      .then((player) => {
        const items = player.items;
        const pokeballIndex = items.findIndex((item) => item.name === pokeball);
        const pokeballQuantity = items[pokeballIndex].quantity;
        if (pokeballQuantity > 0) {
          items.set(pokeballIndex, {
            ...items[pokeballIndex],
            name: pokeball,
            quantity: pokeballQuantity - 1,
          });
          //generate a random number to check if the pokemon is catched
          var n = 255;
          switch (pokeball) {
            case "Pokeball":
              n = Math.floor(Math.random() * 255) + 1;
              break;
            case "Greatball":
              n = Math.floor(Math.random() * 200) + 1;
              break;
            case "Ultraball":
              n = Math.floor(Math.random() * 150) + 1;
              break;
            case "Masterball":
              n = 1;
              break;
            default:
              n = Math.floor(Math.random() * 255) + 1;
              break;
          }

          Pokemons.findOne({ id: req.params.id })
            .then((pokemon) => {
              var catchRate = pokemon.catchRate;
              if (n <= catchRate) {
                userModel
                  .findOne({ username: user })
                  .then((player) => {
                    const pc = player.pc;
                    const capturedPokemon = {
                      id: pokemon.id,
                      name: pokemon.name,
                      picture: pokemon.picture,
                      shiny: shiny,
                      types: pokemon.types,
                      catchdate:
                        new Date().getMonth() +
                        1 +
                        "/" +
                        new Date().getDate() +
                        "/" +
                        new Date().getFullYear(),
                    };
                    pc.push(capturedPokemon);
                    player.save();
                    res.json({
                      message: "You caught a " + pokemon.name + "!",
                      pokemon: capturedPokemon,
                      messageType: "success",
                    });
                  })
                  .catch((err) => res.json(err));
              } else {
                var fleeRate = 255 / catchRate;
                var fleeAttempt = Math.floor(
                  Math.random() * (255 + catchRate) + 1
                );

                if (fleeAttempt <= fleeRate) {
                  res.json({
                    message: "The pokemon fled!",
                    messageType: "success",
                    flee: true,
                  });
                } else {
                  res.json({
                    message: "Pokemon broke free from the " + pokeball + "!",
                    messageType: "success",
                  });
                }
              }
            })
            .catch((err) => res.json(err));
          player.save();
        } else {
          res.json({
            message: "You don't have any " + pokeball + "s !",
            messageType: "warning",
          });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  });
};

//   Items.findOne({ name: pokeball }).then((item) => {
//     if (item.quantity > 0) {
//       Items.findOneAndUpdate(
//         { name: pokeball },
//         { quantity: item.quantity - 1 }
//       )
//         .then((item) => {
//           console.log("you used one " + item.name);
//         })
//         .catch((err) => {
//           console.log(err);
//         });

//       var n = 0;
//       switch (pokeball) {
//         case "Pokeball":
//           n = Math.floor(Math.random() * 255) + 1;
//           break;
//         case "Greatball":
//           n = Math.floor(Math.random() * 200) + 1;
//           break;
//         case "Ultraball":
//           n = Math.floor(Math.random() * 150) + 1;
//           break;
//         case "Masterball":
//           n = Math.floor(Math.random() * 0) + 1;
//           break;
//         default:
//           n = Math.floor(Math.random() * 255) + 1;
//           break;
//       }
//       Pokemons.findOne({ id: req.params.id })
//         .then((pokemon) => {
//           const CatchRate = pokemon.catchRate;
//           if (n < CatchRate) {
//             const newPokemon = {
//               name: pokemon.name,
//               id: pokemon.id,
//               picture: pokemon.picture,
//               shiny: shiny,
//               types: pokemon.types,
//               catched: true,
//             };
//             Pokedex.create(newPokemon)
//               .then((pokemon) => {
//                 const message = `You caught a ` + pokemon.name + " !";
//                 res.json({
//                   message: message,
//                   messageType: "success",
//                   pokemon: pokemon,
//                 });
//               })
//               .catch((err) => {
//                 res.status(500).json({
//                   err,
//                   message: "Erreur d'insertion du pokémon",
//                 });
//               });
//           } else {
//             let name = pokemon.name;
//             let n = Math.floor(Math.random() * 3 * pokemon.catchRate) + 1;
//             let fuite = false;
//             let message = "";
//             if (n <= 1) {
//               fuite = true;
//             }
//             if (fuite) {
//               message = name + " got away !";
//             } else {
//               message = name + " broke free !";
//             }
//             res.json({
//               message: message,
//               messageType: "warning",
//               fuite: fuite,
//             });
//           }
//         })
//         .catch((err) => {
//           res.json(err);
//         })
//         .catch((err) => {
//           res.json(err);
//         });
//     } else {
//       res.json({
//         message: "You don't have any " + pokeball + " !",
//         messageType: "error",
//       });
//     }
//   });
// });
// };
