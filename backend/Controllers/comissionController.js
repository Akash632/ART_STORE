const comissionsModel = require('../Model/comissionsModel');

const comissionsController = async (req,res)=>{
    try{
        const {name,phone,email,requirements} = req.body;

        if(!name||!phone||!email||!requirements){
            return res.status(200).send({
                success:false,
                message:"Please enter valid details",
            })
        }
    
        const comissionDetails = await comissionsModel({name,phone,email,requirements}).save();
        res.status(200).send({
            success:true,
            message:"We get back to you soon!"
        })
    }catch(err){
        res.status(500).send({
            success:false,
            message:"Internal server error"
        })
    }
}
module.exports = comissionsController;