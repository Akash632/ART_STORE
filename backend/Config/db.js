const mongoose=require('mongoose');
require('dotenv').config();

const connectdb = async () =>{
    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.w6ihxug.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Connected to MongoDB');
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectdb;