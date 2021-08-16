//create a model Using a Schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  signUpDate: Date,
  jobTitle: String,
  admin: Boolean,
  isLoggedIn: Boolean,
});

//turn Schema into Model
const User = mongoose.model("User", UserSchema);

module.exports = User;
