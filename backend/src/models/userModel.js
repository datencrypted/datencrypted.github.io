const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      uniqueCaseInsensitive: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    items: {
      type: Array,
      required: true,
    },
    pc: { type: Array, required: false },
  },
  { timestamps: true }
);
userSchema.plugin(uniqueValidator, {
  message: "{PATH} already exists",
});

module.exports = mongoose.model("User", userSchema);
