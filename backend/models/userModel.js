const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

// SCHEMA STRUCTURE
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// STATIC SIGNUP METHOD
userSchema.statics.signup = async function (email, password) {
  // VALIDATION
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  // USER
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email alread in used");
  }

  // MY PASSWORD+HASH
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

// STATIC LOGIN METHOD
userSchema.statics.login = async function (email, password) {
  // VALIDATION
  if (!email || !password) {
    throw new Error("All fields must be filled");
  }

  // USER
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect Email");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect Password");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
