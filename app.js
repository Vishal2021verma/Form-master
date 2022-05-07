
//  Installed module 
// "dependencies": {
//     "body-parser": "^1.20.0",
//     "ejs": "^3.1.6",
//     "express": "^4.17.3",
//     "mongodb": "^4.5.0"
//   }
const express = require('express');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/from.html");
});
app.post("/", (req,res) => {
    const formData = {
        name : req.body.fname
    }
    console.log(formData.name);
    res.end();
});

app.listen(8080, () => {
    console.log("Server is running at port: 8080");
});