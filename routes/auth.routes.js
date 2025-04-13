const express = require('express');
const authConstroller = require('../controllers/auth.controller')
const router = express.Router();


router.get('/signup' ,authConstroller.getSignup);
router.post('/signup' , authConstroller.signup);
router.get('/login' ,authConstroller.getlogin)
router.post('/login' ,authConstroller.login)

module.exports=router;