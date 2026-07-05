const musicModel = require("../models/music.model")
const jwt = require("jsonwebtoken")
const {uploadFile} = require("../services/storage.service")

const createMusic = async (req, res) => {

    const token = req.cookies.token
    
    if(!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        )


        if(decoded.role != "artist") {
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
    const file = req.file

    const result = await uploadFile(file.buffer)

    const music = musicModel.create({
        uri: result.url,
        artist: decoded.id
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

module.exports = { createMusic }