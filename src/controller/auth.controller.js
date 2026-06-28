const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

//REGISTER USER
const registerUser = async (req, res) => {

    const { username, email, password, role } = req.body

    const isUserAlreadyExists = userModel.findOne({
        email
    })

    if(isUserAlreadyExists) {
        return res.status(409).json({
            message: "User already exists"
        })
    }

    if(password.length < 8) {
        return res.status(400).json({
            message: "Password must be at least 8 charecters"
        })
    }

    try {

        const hashedPassword = bcrypt.hash(
            password,
            10
        )

        const user = userModel.create({
            username: username,
            email: email,
            password: hashedPassword,
            role: role
        })

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        )

        res.cookie("token", token)

        res.status(201).json({
            message: "User registered successfully!",
            user: user
        })
    } catch(err) {
        console.log(`Error whire creating account: ${err.message}`)
    }
}

//LOGIN USER



//LOGOUT USER

module.exports = { registerUser }