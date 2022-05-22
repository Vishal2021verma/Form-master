
const mongoose = require('mongoose');
const User = require('../models/login');
const Student = require('../models/formModel');
const bcrypt = require('bcrypt');

var loginAuth = function (req, res) {
    const username = req.body.username;
    const userpassword = req.body.password;
    User.findOne({ email: username }, function (err, foundUser) {
        if (err) {
            console.log(err);
        }
        else {
            if (foundUser) {
                bcrypt.compare(userpassword, foundUser.password, function (err, result) {
                    if (result === true) {
                        console.log(foundUser.email + " Logged In");
                        
                        Student.find({}, (err, foundItem) =>{
                            res.render("list", { newItems: foundItem });
                        });

                    } else {
                        res.send("Incorrect Password");

                    }
                });
           }
        }
    });
        
};

module.exports = loginAuth;
