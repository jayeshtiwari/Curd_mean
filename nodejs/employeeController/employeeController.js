const express = require('express');
var router = express.Router();
var { Employee } = require('../models/employee');
var ObjectId = require('mongoose').Types.ObjectId;

// Get the list of employee
router.get('/',(req,res)=>{
    Employee.find((err,emp)=>{
        if(!err){
            res.send(emp);
        }else{
            console.log(err);
        }
    })
});
// Get a single employee
router.get('/:_id',(req,res)=>{
    if(!ObjectId.isValid(req.params._id)){
        return res.status(400).send(`${req.params._id}`);
    }else{
        Employee.findById(req.params._id,(err,emp)=>{
            if(!err){
                res.send(emp);
            }else{
                console.log(err);
            }
        })
    }
    
});
// Insert a employee
router.post('/',(req,res)=>{
    var employee = new Employee({
        name: req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary,
        hobby:req.body.hobby
    })
    employee.save((err,emp)=>{
        if(!err){
            res.send(emp);
        }else{
            console.log(err);
        }
    })
});

// update a employee
router.put('/:_id',(req,res)=>{

    var employee = {
        name: req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary,
        hobby:req.body.hobby
    };
    if(!ObjectId.isValid(req.params._id)){
        return res.status(400).send(`${req.params._id}`);
    }
    Employee.findByIdAndUpdate(req.params._id, {$set:employee},{new:true},(err,emp)=>{
        if(!err){
            res.send(emp);
        }else{
            console.log(err);
        }
    })
});
// Delete a employee
router.delete('/:_id',(req,res)=>{
    if(!ObjectId.isValid(req.params._id)){
        return res.status(400).send(`${req.params._id}`);
    }else{
        Employee.findByIdAndRemove(req.params._id,(err,emp)=>{
            if(!err){
                res.send(emp);
            }else{
                console.log(err);
            }
        })
    }
    
});
module.exports = router;