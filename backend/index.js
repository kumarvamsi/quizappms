let express=require('express');
let bodyParser=require('body-parser');
let mongoose=require('mongoose');

mongoose.connect('mongodb://admin:admin123@ds135818.mlab.com:35818/vamshi123');

let RegisterSchema=new mongoose.Schema({
  "username":String,
  "email":String,
  "phone":String,
  
  "password":String
});

let RegisterModel=new mongoose.model("user",RegisterSchema);

let app=express();
let bp=bodyParser.json();




let quizschema=new mongoose.Schema({
  "question":String,
  "first":String,
  "second":String,
  "third":String,
  "fourth":String
})

let quizmodel=new mongoose.model("quiz",quizschema);

let testschema=new mongoose.Schema({
    
    "subject":String,
    "instructor":String
})

let testmodel=new mongoose.model("test",testschema);



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get("/register",function(req,res){
    res.json({"msg":"Hello"});

})


app.post("/register",bp,function(req,res){
RegisterModel(req.body).save();

});

app.post("/login",bp,function(req,res){
  console.log(req.body);

});

app.post("/quiz",bp,function(req,res){
quizmodel(req.body).save();
})

app.post("/test",bp,function(req,res){
  testmodel(req.body).save();
})
 
app.post("/teacherlogin",bp,function(req,res){
  console.log(req.body);
})



app.get("/fetchQuestions",function(req,res){
    testmodel.find({},function(err,data){
        res.json(data)
    });
});
app.listen(3000);
console.log("server running @ 3000");

