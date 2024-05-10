const express = require('express');
const Assessment = require('../models/assessment.model');


const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    // console.log('post to /test');
    // var data = req.body;
    // console.log(data);
    const assessment = new Assessment({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        dueDate: req.body.dueDate,
        Grades: req.body.Grades,
        course_id: req.body.course_id,
        course_name: req.body.course_name,
        student_id: req.body.student_id,
        Feedback: req.body.Feedback
        // ... other fields
      })

    try {
        const assessmentToSave = await assessment.save();
        res.status(200).json(assessmentToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Assessment.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Assessment.findById(req.params.id);
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

        const result = await Assessment.findByIdAndUpdate(
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
        const data = await Assessment.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = router;