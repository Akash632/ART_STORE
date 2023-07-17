require('dotenv').config()
const cloudinaryModule = require('cloudinary');

const cloudinary = cloudinaryModule.v2;


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_APIKEY,
    api_secret:process.env.CLOUDINARY_APISECRET
})

module.exports = cloudinary;