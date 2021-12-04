const express = require('express');
const college = require('../models/college');
const College = require('../models/college');
const Student = require('../models/student');
const router = express.Router();


router.get('/', async (req, res) => {
    try{
        const colleges = await College.find();
        res.json(colleges);
    }catch(err){
        console.log(err);
    }
});

router.get('/college/:college_id', async (req, res) => {
    try{
        const college = await College.findOne({id: req.params.college_id});
        res.json(college);
    }catch(err){
        res.json({message: err});
    }
});

router.get('/student/:student_id', async (req, res) => {
    try{
        const student = await Student.findById(req.params.student_id).lean().exec();
        res.json(student);
    }catch(err){
        res.json({message: err});
    }
});

router.get('/colleges_by_state', async (req, res) => {
    try{
        const colleges_by_state = await College.find().sort({state: 1}).lean().exec();
        var colleges_by_state_array = {};
        colleges_by_state.forEach(college => {
            if(colleges_by_state_array[college.state] == undefined){
                colleges_by_state_array[college.state] = [college];
            }else{
                colleges_by_state_array[college.state].push(college);
            }
        });
        res.json(colleges_by_state_array);
    }catch(err){
        console.log(err);
        res.json({message: err});
    }
});

module.exports = router;