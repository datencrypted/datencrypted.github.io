const mongoose = require("mongoose");
const backupSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Pokemons", backupSchema);
