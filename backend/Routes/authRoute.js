const express = require('express');
const { registerController, loginController, getOrdersController, getAllOrdersController, orderStatusController, updateUserController } = require('../Controllers/authController');
const { requireSignIn,isAdmin } = require('../Middlewares/authMiddleware');

const router = express.Router();


router.post('/register',registerController);

router.post('/login',loginController);

router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

router.get('/orders/:id',requireSignIn,getOrdersController);

router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController);

router.put('/order-status/:id',requireSignIn,isAdmin,orderStatusController);

router.put('/update-user',requireSignIn,updateUserController);

module.exports = router;
