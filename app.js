
//  Installed module 
// "dependencies": {
//     "body-parser": "^1.20.0",
//     "ejs": "^3.1.6",
//     "express": "^4.17.3",
//     "mongodb": "^4.5.0"
//   }
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const student = require('./models/formModel');

// database connection
mongoose.connect('mongodb://localhost:27017/formsDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// var db = mongoose.connection;
// db = once("open", () => console.log("Mongo database is connected successfully"));
// db = on("error", console.error.bind(console, "connection error:"));



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/from.html");
});
app.post("/", (req, res) => {
    const formData = {
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
    console.log(formData);
    res.end("<h1>Form submitted Successfully!</h1>" );
});

app.listen(8080, () => {
    console.log("Server is running at port: 8080");
});