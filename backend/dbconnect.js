const mongoose = require('mongoose');
require('dotenv').config();



async function connectToMongoDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000, // Increase to 30 seconds (adjust as needed)
            socketTimeoutMS: 30000 // Increase to 30 seconds (adjust as needed)
        });

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connectToMongoDB;
