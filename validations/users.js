//importing body, params from express-validator
const { body, param } = require('express-validator')

//declaring validations for routes in id (user_id) is required from params.
const getUserById = [
  param("id")
    .escape()
    .notEmpty()
    .withMessage("id is required")
    .isInt()
    .withMessage("id should be an integer")
]

//declaring required validations for createUser api
const createUser = [
  body("first_name")
    .trim()
    .escape().
    notEmpty().
    withMessage("firstName is required")
    .isLength({ min: 3, max: 15 })
    .withMessage("firstName should be in between 3 to 15 characters long"),
  body("last_name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("lastName is required")
    .isLength({ min: 3, max: 15 })
    .withMessage("lastName should be between 3 to 15 characters long"),
  body("email")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Please enter a valid email"),
  body("mobile_number")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("mobileNumber is required")
    .isMobilePhone()
    .withMessage("Please add a valid mobileNumber"),
  body('password')
    .trim()
    .escape()
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
      pointsPerUnique: 1,
      pointsPerRepeat: 0.5,
      pointsForContainingLower: 10,
      pointsForContainingUpper: 10,
      pointsForContainingNumber: 10,
      pointsForContainingSymbol: 10,
    }).withMessage("Password should be of min 8 characters long containing 1 specialCharacter, minimum 1 lowerCase character, minimum 1 upperCase character")
]

//declaring required validations for updateUser api
const updateUser = [
  body("id")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("id should be required")
    .isInt("id should be an integer value"),
  body("first_name")
    .trim()
    .escape().
    notEmpty().
    withMessage("firstName is required")
    .isLength({ min: 3, max: 15 })
    .withMessage("firstName should be in between 3 to 15 characters long"),
  body("last_name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("lastName is required")
    .isLength({ min: 3, max: 15 })
    .withMessage("lastName should be between 3 to 15 characters long"),
  body("email")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Please enter a valid email"),
  body("mobile_number")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("mobileNumber is required")
    .isMobilePhone()
    .withMessage("Please add a valid mobileNumber")
]


module.exports = {
  getUserById,
  createUser,
  updateUser
}