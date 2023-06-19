// const express = require('express');
// const mongoose = require('mongoose');
// require('./db/config.js');
// const cors = require('cors');
// const app = express();
// const productSchema=require('./db/Model/productsModel.js');
// app.use(cors());
// var mongodb =require('mongodb');


// app.get('/products',async (req,res)=>{
//     let productList = mongoose.model('products',productSchema);
    
//     let products = await productList.find();

//     res.send(products);
// })

// app.get('/products/:id',async (req,res)=>{
//     // res.send(req.params.id)
//     let productDetails = mongoose.model('products',productSchema);

//         let productdetails = await productDetails.find({_id: new mongodb.ObjectId(req.params.id)});
//         if(productdetails){
//             res.send(productdetails);
//             console.log(productdetails);
//         }
//         else{
//             res.send('error')
//         }

// })

// app.listen(5001);

// const getData = async()=>{
//     let productList = mongoose.model('products',productSchema);
//     let products = await productList.find();
//     console.log(products);
// }
// getData();


const express = require('express');
const cors = require('cors');
const connectdb=require('./Config/db.js');
const {registerController,loginController} = require('./Controllers/authController.js');
const {getProductController,productDetailsController} =require('./Controllers/ProductController.js');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', registerController);

app.post('/login',loginController);

app.get('/shop', getProductController);

app.get('/shop/:id',productDetailsController);

console.log("Welcome");

connectdb();

app.listen(5000);