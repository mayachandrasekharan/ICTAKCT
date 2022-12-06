const express = require('express')
const router = express.Router() //routing function
const jwt = require('jsonwebtoken');
 

//const logindata = require('../src/Model/login');
const signupdata = require('../src/Model/signup');

function verifyToken(req,res,next){
     console.log("🚀 ~ file: app.js ~ line 38 ~ verifyToken ~ req.headers.authorization", req.headers.authorization)
    if(!req.headers.authorization)
    {
        return res.status(401).send("UnAuthorized Request")

    }
    let token = req.headers.authorization.split(' ')[1];
    if(token == "null")
    {
        return res.status(401).send("UnAuthorized Request")
    }
    let payload = jwt.verify(token,"secretkey")
     console.log("🚀 ~ file: app.js ~ line 49 ~ verifyToken ~ payload", payload)
    if(!payload)
    {   
        return res.status(401).send("UnAuthorized Request");
        
    }
    req.name = payload.subject;
    console.log(req.name);
    next();
}

//signup
router.post('/signup',async(req,res)=>{
try{
var user ={
    name: req.body.user.name,
    username: req.body.user.email,
    gender:req.body.user.gender,
    dob: req.body.user.dob,
    phone: req.body.user.phone,
    password: req.body.user.password,
    confirm_password:req.body.user.confirmPassword
}    
console.log(user);
signupdata.findOne({username: req.body.user.email})
    if(user){
        return res.status(401).json({
            message: 'Username already exists....Please choose another username !'
            
        });
    }
    else
            {
                const newUser=new signupdata(user)
                newUser.save((error,data)=>{
                    if(error)
                    {
                        res.json({"status":"error"})
                    }
                    else{
                        res.json({"status":"success","data":data})
                    }
                })
                
            }
}

catch(error){
    console.log(error);

}

})


//login
router.post('/login',(req,res)=>{
   try{
    let username = req.body.user.email;
    let password = req.body.user.password;
    if(username==' ')
    {
        res.status(401).json({
            message:'Usename can not be empty !'
        });
    }
    logindata.findOne({username:req.body.user.email, password:req.body.user.password},(err,user)=>{

         if(!user)
             {
        res.status(401).json({
            message:"User not found !"
        });
    }
    console.log(username);
    console.log(password);
    
if(password!=user,password){
    res.status(401).json({
        message:"Invalid login credentials"
    });
}
else{
    let payload = {subject:username+password};
            let token = jwt.sign(payload,"secretkey");
            console.log("🚀 ~ file: app.js ~ line 104 ~ logindata.findOne ~ token", token)
            console.log("🚀 ~ file: app.js ~ line 104 ~ logindata.findOne ~ payload", payload)
            console.log(token);
            res.status(200).send({token});
}
})
}
catch
    (error){
            console.log(error);
    }
})



module.exports = router;