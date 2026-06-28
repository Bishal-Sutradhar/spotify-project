const mongoose = require("mongoose")

const connectDB = async () => {

    await mongoose.connect(process.env.MONGO_URI)

    console.log("Successfully connected to DB")
}

module.exports = connectDB