let express=require('express');
let bodyParser=require('body-parser');


let app=express();
let bp=bodyParser.json();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/register",function(req,res){
    res.json({"msg":"Hello"});

})


app.post("/register",bp,function(req,res){
console.log(req.body);

})


app.listen(3000);
console.log("server running @ 3000");