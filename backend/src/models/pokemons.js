const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema(
  {
    id: { type: Number, required: false },

    name: {
      type: String,
      require: false,
    },
    hp: {
      type: Number,
      require: false,
    },
    cp: {
      type: Number,
      require: false,
    },
    picture: {
      type: String,
      require: false,
    },
    types: {
      type: Array,
      require: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created",
    updatedAt: false,
  }
);

module.exports = mongoose.model("Pokedex", pokemonSchema);
