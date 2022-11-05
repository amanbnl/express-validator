//initializing Router
const router = require('express').Router()
//importing validations
const validations = require('../validations/index')
//importing userControllers
const userControllers = require('../controller/users')

/**
 * 
 * 1st argument as path
 * 2nd argument in middlewares
 * 3rd controller which handles the request/response
 */

router.get("/:id", validations.userValidations.getUserById, userControllers.getUserById)
router.post('/', validations.userValidations.createUser, userControllers.createUser)
router.put("/", validations.userValidations.updateUser, userControllers.updateUser)
router.delete("/:id", validations.userValidations.getUserById, userControllers.deleteUser)


module.exports = router