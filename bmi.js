const express = require ('express');


const app = express();
app.use (express.urlencoded({extended: true}));
const port = 5000

app.get("/", function(req, res){
    res.sendFile (__dirname + "/bmi.html");
});

app.post ("/", function(req, res){
    h = parseFloat (req.body.Height);
    w = parseFloat(req.body.Weight);
    bmi = w / (h*h)
    bmi = bmi.toFixed()
    req_Name = req.body.Name
    res.send(`<h1> Hey ! ${req_Name} Your BMI Around :- ${bmi}</h1>`)
});

app.listen(port, function(){
    console.log("Server started on 5000")
});



