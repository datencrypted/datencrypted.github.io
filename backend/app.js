const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const mongoose = require("./src/db/mongo");

const app = express();
const port = 3001;
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app
  .use(favicon(__dirname + "/public/favicon.ico"))
  .use(morgan("dev"))
  .use(bodyParser.json());

// ROUTES utilisées par app (express)
require("./src/routes/capturepokedex")(app);
require("./src/routes/Pokedex")(app);
require("./src/routes/WildEncounter")(app);
require("./src/routes/catchPokemon")(app);
require("./src/routes/updatePokemon")(app);
require("./src/routes/deletePokemon")(app);
require("./src/routes/PokemonList")(app);
require("./src/routes/PokemonsData")(app);
require("./src/routes/PokemonsFetch")(app);
require("./src/routes/PokemonPost")(app);
require("./src/routes/ShinyGenerator")(app);
require("./src/routes/Items")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
