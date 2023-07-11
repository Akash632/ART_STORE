const express = require('express');
const { registerController, loginController } = require('../Controllers/authController');
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

module.exports = router;
