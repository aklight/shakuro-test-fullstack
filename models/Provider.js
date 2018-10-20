const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Provider Schema

const ProviderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String
  }
});

module.exports = User = mongoose.model("providers", ProviderSchema);
