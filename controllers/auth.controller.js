function getSignup(req , res, next){
res.render('auth/signup',{ title: "Signup" })
}
function signup(req , res){

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