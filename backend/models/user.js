var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  salt: String
});

var userModel = mongoose.model("users", userSchema);

module.exports = userModel;
