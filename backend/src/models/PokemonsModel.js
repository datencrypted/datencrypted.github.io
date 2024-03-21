const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema(
  {
    id: { type: Number, required: false },

    name: {
      type: String,
      require: true,
    },
    picture: {
      type: String,
      require: true,
    },
    shiny: {
      type: Boolean,
      require: true,
    },
    types: {
      type: Array,
      require: true,
    },
    catchRate: {
      type: Number,
      require: true,
    },
    catched: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
    createdAt: "created",
    updatedAt: false,
  }
);

module.exports = mongoose.model("PokeApi", pokemonSchema);
