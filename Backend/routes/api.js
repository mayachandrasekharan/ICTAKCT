const express = require('express')
const router = express.Router() //routing function
const signupdata = require('../src/Model/signup');

const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verifytoken') 



//signup
router.post('/signup',async(req,res)=>{
    console.log("test",req.body)
    try{
 let item ={
    name: req.body.name,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    password: req.body.password

}    


let user = await signupdata.findOne({ email: req.body.email })
if (!user) {
    const newuser = new signupdata(item)
    const saveuser = await newuser.save()
    res.send(saveuser);
    console.log(saveuser);
}
console.log("test",req.body);
 return res.json({message: "Email already registered" });
    }catch(error){
        console.log(error)

    }

})


//login
router.post('/login',async(req,res)=>{
    console.log("test",req.body);

   
        try {
	let user = await signupdata.findOne({ email: req.body.email, password: req.body.password })
	        let payload = {'email':req.body.email,'password':req.body.password}
	        let token = jwt.sign(payload,'secretkey')
	
	        if (!user) {
	            
	            return res.json({ message: "Invalid Credentials" });
	
	
	        }
	        console.log("test",req.body);
	        res.send({ 'token': token, 'email': user.email, 'password': user.password });
	
	
} catch (error) {
    console.log(error)

}
    
})



module.exports = router;