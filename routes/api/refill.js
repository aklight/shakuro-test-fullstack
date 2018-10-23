const express = require("express");
const router = express.Router();
const validateRefillInput = require("../../validation/refill.js");

const User = require("../../models/User.js");

// @route   GET refill/
// @desc    Page with available list of providers
// @access  Private

router.post("/", (req, res) => {
  const { errors, isValid } = validateRefillInput(req.body);

  // Check validation

  if (!isValid) {
    return res.status(400).json(errors);
  }

  let { id, amountOfMoney, providerToRefill } = req.body;

  // Getting amount of money to refill as a number value
  amountOfMoney = Number(amountOfMoney.slice(-4));

  User.findById(id)
    .then(user => {
      // Getting amount of money to update existing balance
      let totalMoneyOnBalance = user.balances[providerToRefill] + amountOfMoney;
      switch (providerToRefill) {
        case 'mts':
          User.findByIdAndUpdate(id, { $set: { "balances.mts": totalMoneyOnBalance } })
            .catch(err => {
              throw err;
            });
          break;
        case 'megafon':
          User.findByIdAndUpdate(id, { $set: { "balances.megafon": totalMoneyOnBalance } })
            .catch(err => {
              throw err;
            });
          break;
        case 'beeline':
          User.findByIdAndUpdate(id, { $set: { "balances.beeline": totalMoneyOnBalance } })
            .catch(err => {
              throw err;
            });
          break;

      }
    })
    .then(_ => {
      res.json({
        success: true,
        provider: providerToRefill,
        amount: amountOfMoney
      });
    })
    .catch(err => {
      throw err;
    });
});

module.exports = router;
