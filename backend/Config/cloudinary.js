
const cloudinaryModule = require('cloudinary');

const cloudinary = cloudinaryModule.v2;

cloudinary.config({
    cloud_name:'art-store632',
    api_key:'678464942483365',
    api_secret:'EMI5ZbY-RolwtG8RCS2vWepLIiQ'
})

module.exports = cloudinary;