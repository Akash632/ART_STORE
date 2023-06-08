const express = require('express');
const mongoose = require('mongoose');
require('./db/config.js');
const cors = require('cors');
const app = express();
const productSchema=require('./db/Model/productsModel.js');
app.use(cors());
var mongodb =require('mongodb');


app.get('/products',async (req,res)=>{
    let productList = mongoose.model('products',productSchema);
    
    let products = await productList.find();

    res.send(products);
})

app.get('/products/:id',async (req,res)=>{
    // res.send(req.params.id)
    let productDetails = mongoose.model('products',productSchema);

        let productdetails = await productDetails.find({_id: new mongodb.ObjectId(req.params.id)});
        if(productdetails){
            res.send(productdetails);
            console.log(productdetails);
        }
        else{
            res.send('error')
        }

})

app.listen(5001);

// const getData = async()=>{
//     let productList = mongoose.model('products',productSchema);
//     let products = await productList.find();
//     console.log(products);
// }
// getData();