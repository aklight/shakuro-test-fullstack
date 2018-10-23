const Validator = require("validator");
const _ = require("lodash");

module.exports = function validateRefillInput(data) {
  let errors = {};

  data.phoneNumber = !_.isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.amountOfMoney = !_.isEmpty(data.amountOfMoney) ? data.amountOfMoney : "";

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone number  is required";
  }

  if (
    !Validator.isInt(data.amountOfMoney.trim().substr(2), { min: 1, max: 1000 })
  ) {
    errors.amountOfMoney = "Amount to refill has to be between 1$ and 1000$";
  }

  if (Validator.isEmpty(data.amountOfMoney)) {
    errors.amountOfMoney = "Amount to refill  is required";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
