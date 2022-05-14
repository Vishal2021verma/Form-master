const mongoose = require('mongoose');

const studentData = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type: String},
    dob:{type: Date},
    gender: {type: String},
    category: {type: String},
    email: {type: String},
    pNumber: {type:String},
    adharNumber: {type:String},
    motherName: {type:String},
    fatherName: {type:String},
    houseName: {type:String},
    city: {type:String},
    state: {type:String},
    pincode: {type:String},
});
 const Student = mongoose.model('Student', studentData, 'students');

 module.exports = Student;