const express = require('express');
const Class = require('../models/class.model');


const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    // console.log('post to /test');
    // var data = req.body;
    // console.log(data);
    const classObject = new Class({
        class: req.body.class,
        section: req.body.section,
        studentCount: req.body.studentCount,
        teacherName: req.body.teacherName,
        week: req.body.week,
        schedule: req.body.schedule
    })

    try {
        const classToSave = await classObject.save();
        res.status(200).json(classToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Class.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Class.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Class.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Class.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = router;