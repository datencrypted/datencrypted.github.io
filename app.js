const express = require("express");
const app = express();
const port = 3000;
let pokemons = require("./mock-pokemons");
const { success, getUniqueID } = require("./helper");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PokemonModel = require("./src/models/pokemons");
mongoose
  .connect("mongodb://localhost:27017/pokedex", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const logger = (req, res, next) => {
  console.log("URL : ", req.url);
  next();
};
app
  .use(favicon(__dirname + "/public/favicon.ico"))
  .use(morgan("dev"))
  .use(bodyParser.json());

app.get("/api/pokemon/pokedex", (req, res) =>
  res.send("Il y a " + pokemons.length + " pokemons dans votre pokedex")
);
app.get("/api/pokemon/liste", (req, res) => {
  const message = "Liste des pokemons";
  res.json(success(message, pokemons));
});
app.get("/api/pokemon/:id", (req, res) => {
  const pokemon = pokemons.find((pokemon) => pokemon.id == req.params.id);
  const message = "Un pokémon a bien été trouvé";
  if (pokemon) {
    res.json(success(message, pokemon));
  } else {
    res.status(404).json(success("Aucun pokémon trouvé", null));
  }
});

app.post("/api/pokemon", (req, res) => {
  const id = getUniqueID(pokemons);
  const pokemonCreated = { ...req.body, ...{ id: id, created: new Date() } };
  pokemons.push(pokemonCreated);
  const message = `Le pokémon ` + pokemonCreated.name + ` a bien été crée.`;
  res.json(success(message, pokemonCreated));
});

app.delete("/api/pokemon/:id", (req, res) => {
  const pokemon = pokemons.find((pokemon) => pokemon.id == req.params.id);
  if (pokemon) {
    pokemons = pokemons.filter((pokemon) => pokemon.id != req.params.id);
    const message = `Le pokémon ` + pokemon.name + ` a bien été supprimé.`;
    res.json(success(message, pokemon));
  } else {
    const message = `Le pokémon n°` + req.params.id + ` n'a pas été trouvé.`;
    res.json(success(message, null));
  }
});

app.put("/api/pokemon/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemonUpdated = { ...req.body, id: id };
  pokemons = pokemons.map((pokemon) => {
    return pokemon.id === id ? pokemonUpdated : pokemon;
  });

  const message = `Le pokémon ${pokemonUpdated.name} a bien été modifié.`;
  res.json(success(message, pokemonUpdated));
});

// add a new pokemon to the database
app.post("/api/pokemon/capture", (req, res) => {
  const id = getUniqueID(pokemons);
  const pokemonCaptured = new PokemonModel({
    id: id,
    ...req.body,
    ...{ created: new Date() },
  });
  pokemons.push({ id: id, ...req.body, ...{ created: new Date() } });

  const message = `Le pokémon ` + pokemonCaptured.name + ` a bien été crée.`;
  pokemonCaptured
    .save()
    .then(() => res.json(success(message, pokemonCaptured)))
    .catch((err) => res.status(500).json(success(err, null)));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
