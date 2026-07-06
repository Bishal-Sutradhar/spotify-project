const musicModel = require("../models/music.model")
const albumModel = require("../models/album.model")
const jwt = require("jsonwebtoken")
const uploadFile = require("../services/storage.service")

const createMusic = async (req, res) => {

    try {
        if(req.user.role !== "artist") {
            return res.status(403).json({
                message: "You do not have access to create an music."
            })
        }
    } catch(err) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    const {title} = req.body
    const {buffer} = req.file

    const result = await uploadFile(buffer)

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id
    })


    res.status(201).json({
        message: "Music uploaded successfully!",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    })

}

const createAlbum = async (req, res) => {

    if(req.user.role !== "artist") {
        return res.status(403).json({
            message: "You do not have access to create an album"
        })
    }

    const { title, musics } = req.body

    try {
        const album = await albumModel.create({
            title,
            musics,
            artist: req.user.id
        })

        res.status(201).json({
            message: "Album created successfully",
            album: {
                title,
                musics,
                artist: req.user.id
            }
        })
    } catch(err) {
        console.error(`Error while creating album: ${err.message}`)

        res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = { createMusic, createAlbum }