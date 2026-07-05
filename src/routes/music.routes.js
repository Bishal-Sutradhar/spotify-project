const express = require("express")
const musicController = require("../controller/music.controller")
const authMiddleware = require("../middleware/auth.middleware")

const multer = require("multer")

const upload = multer({
    storage: multer.memoryStorage()
})

const router = express.Router()

router.post("/upload", upload.single("music"), authMiddleware, musicController.createMusic)

module.exports = router