const express = require("express")
const musicController = require("../controller/music.controller")
const authMiddleware = require("../middleware/auth.middleware")
const upload = require("../middleware/upload.middleware")

const router = express.Router()

router.post("/upload", upload.single("music"), authMiddleware, musicController.createMusic)
router.post("/album", authMiddleware, musicController.createAlbum)
router.get("/", authMiddleware, musicController.getAllMusics)
router.get("/albums", authMiddleware, musicController.getAllAlbums)
router.get("/albums/:albumId", authMiddleware, musicController.getAlbumsById)

module.exports = router