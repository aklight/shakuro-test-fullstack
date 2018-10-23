const express = require("express");
const router = express.Router();

const Provider = require("../../models/Provider.js");

// @route   GET providers/
// @desc    Page with available list of providers
// @access  Private

router.get("/", (req, res) => {
  Provider.find()
    .then(provider => res.json(provider))
    .catch(err => {
      throw err;
    });
});

module.exports = router;
