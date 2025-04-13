const User = require('../models/user.model')
function getSignup(req , res, next){
res.render('auth/signup',{ title: "Signup" })
}
async function signup(req , res){
const user = new User(req.body.username, req.body.email, req.body.password);
await user.signup();
res.redirect('/login');
}
function login(req , res){
    
}
function getlogin(req , res, next){
    res.render('auth/login',{ title: "login" })

}

module.exports={
    getSignup : getSignup,
    getlogin:getlogin,
    signup :signup,
    login:login
}