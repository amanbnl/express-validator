//importing validationResult from express-validator
const { validationResult } = require('express-validator')
//importing userValidations
const userValidations = require('./users')

/**
 * Purpose: formatting the errors in input fields
 * @param {*} param0 
 * @returns 
 */
const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
  let err = {}
  err[param] = msg
  return err
}

/**
 * Purpose: Returns formatted errors in input fields.
 * @param {*} req 
 * @returns 
 */
const getRequestErrors = (req) => {
  return validationResult(req).formatWith(errorFormatter)
}

module.exports = {
  userValidations,
  getRequestErrors
}