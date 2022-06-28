const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const mongoose = require("./src/db/mongo");
const app = express();
const port = 3000;

app
  .use(favicon(__dirname + "/public/favicon.ico"))
  .use(morgan("dev"))
  .use(bodyParser.json());

// ROUTES utilisées par app (express)

require("./src/routes/findAllPokemons")(app);
require("./src/routes/findOnePokemon")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
