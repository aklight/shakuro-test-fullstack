const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');

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

// Server static assets if in production

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Server is running on port ${port}`));
