const express = require('express')
const router = express.Router() //routing function
const jwt = require('jsonwebtoken');
 

// const logindata = require('../src/Model/login');
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

// // route("/getusers")
// router.get("/getusers",(req,res)=>{
//     try{
// signupdata.find()
// .then(data=>{
//     res.send(data);
// })
//     }
//     catch(error){
//         console.log(error);
//     }
// });

//signup
router.post('/signup',async(req,res)=>{
try{
 let item ={
    name: req.body.user.name,
    email: req.body.user.email,
    phone: req.body.user.phone,
    password: req.body.user.password,
    confirmPassword:req.body.user.confirmPassword
}    
console.log(user);

let user = await signupdata.findOne({ email: req.body.email })
if (!user) {
    const newuser = new signupdata(item)
    const saveuser = await newuser.save()
    res.send(saveuser)
}
return res.json({ message: "Email already registered" });
} catch (error) {
console.log(error)
}

})
router.get((req,res)=>{
    res.send("Hello")
})


//login
router.post('/login',async(req,res)=>{
    try {
        let user = await signupdata.findOne({ email: req.body.email, password: req.body.password })
        let payload = {'email':req.body.email,'password':req.body.password}
        let token = jwt.sign(payload,'secretkey')

        if (!user) {
            
            return res.json({ message: "Invalid Credentials" });


        }
        // res.send(user)
        res.send({ 'token': token, 'email': user.email, 'password': user.password });


    } catch (error) {
        console.log(error)
    }
})



module.exports = router;