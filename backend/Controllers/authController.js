const userModel = require("../Model/userModel.js");
const { hashPassword, comparePassword } = require("../Helpers/authHelper.js");
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    console.log(name,email,password,phone,address);
    //validations
    if (!name || !email || !password || !phone || !address) {
      return res.status(200).send({
        success: false,
        message: "Please enter valid details"
      });
    }

    //existing user
    const existinguser = await userModel.findOne({ email: email });
    if (existinguser) {
      return res.status(200).send({
        success: false,
        message: "User already exists. Please try to login!!!"
      });
    }

    const hashedPassword = await hashPassword(password);
    //saving new user
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(200).send({
      success: true,
      message: "User registered successfully",
      user:{
        name: user.name,
        email: user.email,
        phone:user.phone,
        address:user.address
      }
    });
  }
   catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "it's not you it's us"
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validations
    if (!email || !password) {
      return res.status(200).send({
        success: false,
        message: "Please enter valid details"
      });
    }

    //new user
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "email not registered"
      });
    }

    // //password validation
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid password"
      });
    }

    console.log(process.env.JWT_SECRET)
    //token
    const token = await jwt.sign({_id:user.id},process.env.JWT_SECRET,{expiresIn:'7d'});

    res.status(200).send({
      success: true,
      message: "login successful",
      user: {
        name: user.name,
        email: user.email,
        phone:user.phone,
        address:user.address
      },
      token
    });
  } 
  catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "it's not you. its's us",
      err
    });
  }
};


module.exports = {registerController, loginController};
