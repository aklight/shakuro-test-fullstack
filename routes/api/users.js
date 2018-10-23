const express = require("express");
const router = express.Router();

// Load input validation
const validateLoginInput = require("../../validation/login.js");

const User = require("../../models/User.js");

// @route   GET users/login
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
      return res.json({
        success: "Success autorization",
        payload: {
          id: user._id,
          email: user.email,
          balances: user.balances
        }
      });
    } else {
      errors.password = "Password incorrect";
      return res.status(400).json({ errors });
    }
  });
});

module.exports = router;
