const express = require("express")
const authController = require('../controller/auth.controller')

const router = express.Router()

router.post("/register", authController.registerUser)
router.post("/login-user", authController.loginUser)
router.post("/logout", authController.logoutUser)

module.exports = router
