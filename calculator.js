const express = require ('express');


const app = express();
app.use (express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile (__dirname + "/index.html");
});

app.post ("/", function(req, res){
    let first_num = Number (req.body.first_num);
    let second_num = Number (req.body.second_num);

    let result = first_num + second_num;

    res.send("The sum is " + result);
});

app.listen(3000, function(){
    console.log("Server started on 3000")
});



