const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {


    const token = req.cookies.token

    if(!token) {
        return res.status(401).json({
            message: "Login required"
        })
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        console.log(decoded)

        req.user = decoded

        next()

    } catch(err) {
        console.log(`Verification failed: ${err.message}`)

        return res.status(401).json({
            message: "Unauthorized"
        })
    }

}

module.exports = authMiddleware
