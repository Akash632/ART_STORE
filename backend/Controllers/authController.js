const userModel = require("../Model/userModel.js");
const orderModel = require("../Model/orderModel.js");
const { hashPassword, comparePassword } = require("../Helpers/authHelper.js");
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

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

    //token
    const token = await jwt.sign({_id:user.id},process.env.JWT_SECRET,{expiresIn:'7d'});

    res.status(200).send({
      success: true,
      message: "login successful",
      user: {
        _id:user._id,
        name: user.name,
        email: user.email,
        phone:user.phone,
        address:user.address
      },
      token
    });
  } 
  catch (err) {
    res.status(500).send({
      success: false,
      message: "it's not you. its's us",
      err
    });
  }
};


const getOrdersController = async (req,res)=>{
  try{
    const {id} = req.params;


    const result = await orderModel.find({buyer:id}).sort({"createdAt":1});

    res.status(200).send({
      success:true,
      message:"List of orders",
      result:result
    })

  }catch(err){
    console.log(err);
    res.status(500).send({
      success:false,
      message:"Internal server error"
    })
  }
}

const getAllOrdersController=async(req,res)=>{
  try{
    const result = await orderModel.find({}).populate("products._id").sort({"createdAt":1});

    console.log(result);

    res.status(200).send({
      success:true,
      message:"List of orders",
      result:result
    })

  }catch(err){
    console.log(err);
    res.status(500).send({
      success:false,
      message:"Internal server error"
    })
  }
}

const orderStatusController=async(req,res)=>{
  try{
    const {id}=req.params;
    const {status}=req.body;

    const result = await orderModel.findByIdAndUpdate({_id:id}, {status:status},{new:true});

    res.status(200).send({
      success:true,
      message:"Status updated successfully"
    })
  }catch(err){
    res.status(500).send({
      success:false,
      message:"Internal server error"
    })
  }
}
module.exports = {registerController, loginController,getOrdersController,getAllOrdersController,orderStatusController};
