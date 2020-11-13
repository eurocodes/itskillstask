const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    MONGODB_NAME: process.env.MONGODB_NAME,
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
};