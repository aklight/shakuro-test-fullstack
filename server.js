const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 8080;

// DB Config

const db = require("./config/keys").mongoURI;

// All available routes

const users = require("./routes/api/users.js");
const providers = require("./routes/api/providers.js");
const refill = require("./routes/api/refill.js");

// Connect to MongoDB

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(err => {
    throw err;
  });

// Body parser middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", users);
app.use("/providers", providers);
app.use("/refill", refill);

app.listen(port, () => console.log(`Server is running on port ${port}`));
