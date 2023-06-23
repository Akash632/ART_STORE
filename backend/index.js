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
const dotenv = require('dotenv');
const connectdb=require('./Config/db.js');
const {getProductController,productDetailsController} =require('./Controllers/ProductController.js');
const authRoute = require('./Routes/authRoute.js');
const comissionsRoute = require('./Routes/comissionsRoute.js');
const contactRoute = require('./Routes/contactRoute.js');
const categoryRoute = require('./Routes/categoryRoute.js');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/v1/auth',authRoute);


app.get('/shop', getProductController);

app.get('/shop/:id',productDetailsController);

app.use('/api/v1/comissions',comissionsRoute);

app.use('/api/v1/contact',contactRoute);

app.use('/api/v1/category',categoryRoute);


app.get('/',(req,res)=>{
    res.send("api is working");
})
connectdb();

app.listen(5000);