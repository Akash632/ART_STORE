const contactModel = require('../Model/contactModel');

const contactController = async (req,res)=>{
    try{
        const {name,phone,email,comment}=req.body;

        if(!name||!phone||!email||!comment){
            return res.status(200).send({
                success:false,
                message:"Please enter valid details"
            })
        }
    
        const contact = await new contactModel({name,phone,email,comment}).save();
        res.status(200).send({
            success:true,
            message:"We will get back to you soon!"
        })
    }
    catch(err){
        res.status(500).send({
            success:false,
            message:"Internal server error"
        })
    }
}

module.exports = contactController;