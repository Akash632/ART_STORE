const categoryModel = require('../Model/categoryModel');
const slugify = require('slugify');


const createCategoryController = async (req,res)=>{
    try{
        const {name} = req.body;
        console.log(name);
            if(!name){
                return res.status(401).send(
                    {
                        message:"Name is required"
                    }
                )
            }
            const existingCategory = await categoryModel.findOne({name:name});
            if(existingCategory){
                return res.status(200).send({
                    success:true,
                    message:"Category already exists"
                })
            }

            const category = await new categoryModel({name,slug:slugify(name)}).save()
            res.status(200).send({
                success:true,
                message:"New category has been created",
                category
            })
    }catch(err){
        res.status(500).send({
            success:false,
            message:"Error in category",
            err
        })
    }
}

const updateCategoryController = async (req,res) =>{
    try{

        const {name}=req.body;
        const {id}=req.params;
        const category = await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:"Category has been updated",
            category
        })
    }catch(err){
        res.status(500).send({
            success:false,
            message:"Error in server",
            err
        })
    }
}

const categoryController = async (req,res)=>{
    try{
        const categories = await categoryModel.find({});
        res.status(200).send({
            success:true,
            message:"All Categories list",
            categories,
        })
    }catch(err){
        res.status(500).send({
            success:false,
            message:"Error in server",
            err
        })
    }
}

const singleCategoryController = async (req,res) =>{
    try{
        const {slug} = req.params;
        const category = await categoryModel.findOne({slug})
        res.status(200).send({
            success:true,
            message:"Get single category successfully",
            category,
        })
    }catch(err){
        res.status(500).send({
            success:false,
            message:"Error in server",
            err
        })
    }
}

const deleteCategoryController = async (req,res)=>{
    try{
        const {id}  = req.params;
        await categoryModel.findOneAndDelete({_id:id});
        res.status(200).send({
            success:true,
            message:"Delete category successfully"
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            success:false,
            message:"Error in server",
            err
        })
    }
}
module.exports = {createCategoryController,updateCategoryController,categoryController,singleCategoryController,deleteCategoryController};