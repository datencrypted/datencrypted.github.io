const mongoose = require("mongoose");

const PcSchema = mongoose.Schema(
  {
    id: { type: Number, required: false },

    name: {
      type: String,
      require: false,
    },
    picture: {
      type: String,
      require: false,
    },
    shiny: {
      type: Boolean,
      require: false,
    },
    types: {
      type: Array,
      require: false,
    },
    catched: {
      type: Boolean,
      require: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created",
    updatedAt: false,
  }
);

module.exports = mongoose.model("Pc", PcSchema);
