const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: "John",
    require: true,
  },
  last_name: {
    type: String,
    default: "Doe",
  },
  email: {
    type: String,
  },
  dni: {
    type: String,
    default: 0,
  },
  birthdate: {
    type: String,
    default: "01/01/2000",
  },
  gender: {
    type: String,
    enum: ["M", "F"],
    default: "M",
  },
  courses: {
    type: Array,
    default: [],
  },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
