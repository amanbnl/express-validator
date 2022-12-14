// importing validator
const { getRequestErrors } = require('../validations/index')
// importing utility files
const { generateResponse, statusCodes, messages } = require('../utils/helper')
// importing userServices
const userService = require('../services/users')

/**
 * Purpose: Function which handles the requests for creating new user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createUser = async (req, res) => {
  const errors = getRequestErrors(req)
  if (!errors.isEmpty()) {
    return generateResponse(res, statusCodes.BAD_REQUEST, messages.BAD_REQUEST, undefined, errors.array())
  }
  const result = await userService.createUser(req.body)
  return generateResponse(res, result.status, result.message, result.data)
}

/**
 * Purpose: Function which handles the requests for getting user details by id
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getUserById = async (req, res) => {
  const errors = getRequestErrors(req)
  if (!errors.isEmpty()) {
    return generateResponse(res, statusCodes.BAD_REQUEST, messages.BAD_REQUEST, undefined, errors.array())
  }
  const result = await userService.getUserById(req.params)
  return generateResponse(res, result.status, result.message, result.data)
}

/**
 * Purpose: Function which handles the requests for updating user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const updateUser = async (req, res) => {
  const errors = getRequestErrors(req)
  if (!errors.isEmpty()) {
    return generateResponse(res, statusCodes.BAD_REQUEST, messages.BAD_REQUEST, undefined, errors.array())
  }
  const result = await userService.updateUser(req.body)
  return generateResponse(res, result.status, result.message, result.data)
}

/**
 * Purpose: Function which handles the requests for deleting user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const deleteUser = async (req, res) => {
  const errors = getRequestErrors(req)
  if (!errors.isEmpty()) {
    return generateResponse(res, statusCodes.BAD_REQUEST, messages.BAD_REQUEST, undefined, errors.array())
  }
  const result = await userService.deleteUser(req.params)
  return generateResponse(res, result.status, result.message, result.data)
}

module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser
}