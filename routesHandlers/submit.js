const express = require('express');
const mongoose = require('mongoose');
const Student = require('../models/formModel');
exports.SUBMIT_DATA = (req, res) => {
    const student = new Student(
        {
            _id: mongoose.Types.ObjectId(),
            name: req.body.fname,
            dob: req.body.dob,
            gender: req.body.gender,
            category: req.body.category,
            email: req.body.email,
            pNumber: req.body.pNumber,
            adharNumber: req.body.adharNumber,
            motherName: req.body.motherName,
            fatherName: req.body.fatherName,
            houseName: req.body.houseName,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode
        }
    );
    student.save().then(() => {res.sendFile(__dirname + "/thankyou.html")}).catch((error)=> {
        res.status(500).json({
            message: "Something went wrong when adding to MongoDB",
            error,
          })
    }); 
}   