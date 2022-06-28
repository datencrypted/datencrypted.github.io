const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema(
  {
    id: { type: Number, required: true },

    name: {
      type: String,
      require: true,
    },
    hp: {
      type: Number,
      require: true,
    },
    cp: {
      type: Number,
      require: true,
    },
    picture: {
      type: String,
      require: true,
    },
    types: {
      type: Array,
      require: true,
    },
  },
  {
    timestamps: true,
    createdAt: "created",
    updatedAt: false,
  }
);

module.exports = mongoose.model("Pokemon", pokemonSchema);
