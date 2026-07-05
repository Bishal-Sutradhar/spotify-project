const express = require("express")
const musicController = require("../controller/music.controller")
const authMiddleware = require("../middleware/auth.middleware")

const router = express.Router()

router.post("/upload", authMiddleware, musicController.createMusic)

module.exports = router