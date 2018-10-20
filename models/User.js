const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  balances: {
    mts: {
      type: Number,
      required: true
    },
    megafon: {
      type: Number,
      required: true
    },
    beeline: {
      type: Number,
      required: true
    }
  },
  isLoggedIn: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
