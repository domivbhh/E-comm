const mongoose = require("mongoose");

//function for email validation
var validator=function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}


//user schema validation
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator,
      message: "Invalid email address format",
    },
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    selected: false,
  },
  confirmpassword: {
    type: String,
    required: true,
    selected: false,
  },
});



//user model
const User = mongoose.model("User", userSchema);
module.exports = User;
