const express = require('express')
const router = express.Router()
const DATA = require('../src/Model/response')
const pastDATA = require('../src/Model/past')
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
            resfile:req.file.originalname
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



// add past curriculum

router.post('/addpast',upload.single('rfile'), async (req, res) => {
    try{
        
        const file = new pastDATA({
            name: req.body.name,
            area: req.body.area,
            ic: req.body.ic,
            category:req.body.category,
            hour:req.body.hour,
            resfile:req.file.originalname
        });
        await file.save();
        res.status(201).send('File Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }
})

// get past curriculum

router.get('/listpast', async (req, res) => {

    try{
        const files = await pastDATA.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }

})

// get single past curriculum

router.get('/singlepast/:id', async (req, res) => {

    try{
        let id = req.params.id;
        const files = await pastDATA.findById(id);
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }

})








module.exports = router