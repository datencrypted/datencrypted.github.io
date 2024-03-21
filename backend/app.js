if (typeof PhusionPassenger !== "undefined") {
  PhusionPassenger.configure({ autoInstall: false });
}
// APP SETUP
const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3030;
const cors = require("cors");
// const flash = require("connect-flash");
// const helmet = require("helmet");

// MONGOOSE SETUP
const mongoose = require("mongoose");
const uri = process.env.ATLAS_URI;
//ok
try {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      require("./src/db/mongo");
    });
} catch (e) {
  console.log(e);
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// MIDDLEWARE
app
  .use(morgan("dev"))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }));
//CORS SETUP authorize all from bryanhuvelin.fr
app.use(cors({}));

app.use(
  cors({
    origin: "*",

    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",

    preflightContinue: false,

    optionsSuccessStatus: 204,

    credentials: true,

    allowedHeaders: "Content-Type, Authorization, X-Requested-With",
  })
);

app.use("/api/users", require("./src/routes/userRoutes"));
app.use("/api/pokemons", require("./src/routes/apiPokemons"));
// ROUTES utilisées par app (express)

//Folder User
require("./src/routes/usersleaderboard")(app);
require("./src/routes/catchPokemon")(app);
require("./src/routes/cheat")(app);
require("./src/routes/Items")(app);
require("./src/routes/Pc")(app);
require("./src/routes/PokemonsFetch")(app);
require("./src/routes/WildEncounter")(app);

// si aucune des routes n'est utilisée :
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../bryanhuvelin.fr/build", "index.html")
  );
});
app.use(({ res }) => {
  const message =
    "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
  res.status(404).json({ message });
});
if (typeof PhusionPassenger !== "undefined") {
  app.listen("passenger");
} else {
  app.listen(port, console.log("Listening on port : " + port));
}
