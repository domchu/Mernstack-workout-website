const express = require("express");

// CONTROLLERS FUNCTION
const { signupUser, loginUser } = require("../Controllers/userController");

const router = express.Router();

// LOGIN ROUTE
router.post("/login", loginUser);

// SIGNUP ROUTE
router.post("/signup", signupUser);

module.exports = router;
