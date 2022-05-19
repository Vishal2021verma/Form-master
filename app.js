
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const submitData = require('./routesHandlers/submit');
const { Template } = require('ejs');
const Student = require('./models/formModel');
const loginAuth = require('./routesHandlers/login');


// database connection
mongoose.connect('mongodb://localhost:27017/formsDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
app.set("view engine", "ejs");

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Get routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/htmlFile/from.html");
});

app.get("/login", (req,res) => {
    res.sendFile(__dirname + "/htmlFile/login.html");
});
app.get("/*", (req, res) => {
    res.status(404).sendFile(__dirname + "/htmlFile/four.html");
});


// Post routes
app.post("/submit", submitData.SUBMIT_DATA);
app.post("/loginAuth", loginAuth);

//Port listen 8080
app.listen(8080, () => {
    console.log("Server is running at port: 8080");
});