const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

//REGISTER USER
const registerUser = async (req, res) => {

    const { username, email, password, role="user" } = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
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

        const hashedPassword = await bcrypt.hash(
            password,
            10
        )

        const user = await userModel.create({
            username,
            email,
            password: hashedPassword,
            role
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

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({
            message: "User registered successfully!",
            user: user
        })
    } catch(err) {
        console.log(`Error whire creating account: ${err.message}`)
    }
}

//LOGIN USER
const loginUser = async (req, res) => {

    const { username, email, password } = req.body

    const user = await userModel.findOne({
        $or:[
            { username },
            { email }
        ]
    })

    if(!user) {
        return res.status(401).json({
            message: "User not found!"
        })
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    )

    if(!isMatch) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    try {

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        )

        res.cookie( "token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(200).json({
            message: "User logged in successfully!"
        })

    } catch(err) {
        console.error(`Critical login system error: ${err.message}`)

        return res.status(500).json({
            message: "Something went wrong on our end! Please try again later."
        })
    }
}


//LOGOUT USER
const logoutUser = async (req, res) => {

    res.clearCookie("token")

    res.status(200).json({
        message: "User logged out successfully"
    })
}


module.exports = { registerUser, loginUser, logoutUser }