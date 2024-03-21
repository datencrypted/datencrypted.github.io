const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  id: { type: Number, required: false },

  name: {
    type: String,
    require: false,
  },
  picture: {
    type: String,
    require: false,
  },
  quantity: {
    type: Number,
    require: false,
  },
});

module.exports = mongoose.model("Item", ItemSchema);
