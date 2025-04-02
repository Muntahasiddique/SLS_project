const express = require('express');
const authConstroller = require('../controllers/auth.controller')
const router = express.Router();


router.get('/signup' ,authConstroller.getSignup);
router.get('/login' ,authConstroller.getlogin)

module.exports=router;