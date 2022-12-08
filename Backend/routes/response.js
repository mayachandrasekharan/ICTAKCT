const express = require('express')
const router = express.Router()
const DATA = require('../src/Model/response')
const {upload} =require('../middlewares/upload')


// full list read
router.get('/listresponse', async (req, res) => {

    try{
        const files = await DATA.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }

})

// add

router.post('/addresponse',upload.single('rfile'), async (req, res) => {
    try{
        
        const file = new DATA({
            name: req.body.name,
            area: req.body.area,
            ic: req.body.ic,
            category:req.body.category,
            hour:req.body.hour,
            comment:req.body.comment,
            resfile:req.file.originalname,
            filePath: req.file.path
        });
        await file.save();
        res.status(201).send('File Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }
})

// get single data

router.get('/singleresponse/:id', async (req, res) => {

    try{
        let id = req.params.id;
        const files = await DATA.findById(id);
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }

})

//edit response

router.put('/editresponse/:id', upload.single('rfile'), async (req,res)=>{
    try {
        let id=req.params.id
        let item={
            name: req.body.name,
            area: req.body.area,
            ic: req.body.ic,
            category:req.body.category,
            hour:req.body.hour,
            comment:req.body.comment,
            resfile:req.file.originalname,
            filePath: req.file.path
        }
        let update={
            $set:item
        }
        const updateResponse=await DATA.findByIdAndUpdate({'_id':id},update)
        res.status(200).send(updateResponse)
        
    } catch (error) {
        res.status(400).send(error.message);
        
    }

})





module.exports = router