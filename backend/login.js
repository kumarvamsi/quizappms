let express=require('express');
let bodyParser=require('body-parser');


let app=express();
let bp=bodyParser.json();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get("/login",function(req,res){
    res.json({"msg":"somedata"});
  
  })
  
  
  app.post("/login",bp,function(req,res){
  console.log(req.body);
  
  })
  
  
  app.listen(3000);
  console.log("server  not running @ 3000");
  
  
  