const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  // Define user schema fields
  username: String,
  password: String,
  // Add any other fields you may need
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
