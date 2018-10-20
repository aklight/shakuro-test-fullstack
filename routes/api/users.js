const express = require("express");
const router = express.Router();

// Load input validation
const validateLoginInput = require("../../validation/login.js");

const User = require("../../models/User.js");
const Provider = require("../../models/Provider.js");

// @route   GET api/users/
// @desc    Main page
// @access  Private

router.get("/", (req, res) => {
  Provider.find()
    .then(provider => res.json(provider))
    .catch(err => console.log(err));
});

// @route   GET api/users/login
// @desc    Login User
// @access  Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json({ errors });
    }

    /* 
    *** Checking the password
    *** In real-world apps password must be crypted and conditional comparison should be between crypted versions of passwords
    */

    if (password === user.password) {
      User.findByIdAndUpdate(
        { email: "testuser@test.com" },
        { isLoggedIn: true }
      );

      return res.json({
        success: "Success autorization",
        payload: {
          email: user.email,
          balances: user.balances,
          isLoggedIn: user.isLoggedIn
        }
      });
    } else {
      errors.password = "Password incorrect";
      return res.status(400).json({ errors });
    }
  });
});

module.exports = router;
