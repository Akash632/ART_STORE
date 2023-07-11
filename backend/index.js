const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectdb=require('./Config/db.js');
const {getProductController,productDetailsController} =require('./Controllers/ProductController.js');
const authRoute = require('./Routes/authRoute.js');
const comissionsRoute = require('./Routes/comissionsRoute.js');
const contactRoute = require('./Routes/contactRoute.js');
const categoryRoute = require('./Routes/categoryRoute.js');
const cartRouter = require('./Routes/cartRoute.js');
const productRouter = require('./Routes/productRoute.js');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/v1/auth',authRoute);

app.use('/api/v1/products',productRouter);

app.use('/api/v1/comissions',comissionsRoute);

app.use('/api/v1/contact',contactRoute);

app.use('/api/v1/category',categoryRoute);

app.use('/api/v1/cart',cartRouter)


app.get('/',(req,res)=>{
    res.send("api is working");
})
connectdb();

app.listen(5000);