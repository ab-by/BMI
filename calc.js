const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");



const app= express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req, res){

    res.sendFile(__dirname + "/index.html");

});



app.post("/", function(req,res){
    
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var n3= n1/((n2/100)*(n2/100));
    console.log(req.body.num1);

    res.send("Your BMI is : " + n3 );
});
 
app.listen(3000, function(){
    console.log("Server has started on port 3000")
});
