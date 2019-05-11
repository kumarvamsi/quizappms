let express=require('express');
let bodyParser=require('body-parser');
let mongoose=require('mongoose');
//nodemailer starting
var nodemailer=require('nodemailer');
var transporter =nodemailer. createTransport({
  seervice:'gmail',
  auth:{
    user:'raghuvaran02400@gmail.com',
    pass:'9398219910'

  }
});


mongoose.connect('mongodb://admin:admin123@ds135818.mlab.com:35818/vamshi123' ,{ useNewUrlParser: true });

let RegisterSchema=new mongoose.Schema({
  "username":String,
  "email":String,
  "phone":String,
  "password":String,
  "confirm":String
});

let RegisterModel=new mongoose.model("user",RegisterSchema);


let app=express();
let bp=bodyParser.json();
let quizschema=new mongoose.Schema({
  "name":String,
  "question":String,
  "first":String,
  "second":String,
  "third":String,
  "fourth":String,
  "answer":String

})

let quizmodel=new mongoose.model("quiz",quizschema);
let testschema=new mongoose.Schema({
    
    "subject":String,
    "instructor":String,
    "question":Number
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
  RegisterModel.find({"username":req.body.username},function(err,data){
      if(data.length==0){

          
        RegisterModel(req.body).save();
        
        res.json({"msg":"successfully registered"});
      }
      else{
        res.json({"msg":"username already taken"});
        
      }
      console.log(req.body);
  })
});

let loginschema=new mongoose.Schema({

});
let loginmodel= new mongoose.model("login",loginschema);


app.post("/login",bp,function(req,res){

  //nodemailer strting.
  var mailOptions={
    from:'raghuvaran02400@gmail.com',
    to:'kumarbvamsi@gmail.com',
    subject:'raghu',
    text:'thats it'
  };
  
  transporter.sendMail(mailOptions,function(error,info){
    if(error)
    {
    console.log(error);
    }
    else{
    console.log('email sent:'+info.response);
    }
    
    });

//nodemailer ending.



   loginmodel(req.body).save();
  console.log(req.body);
//find("key":"value")
    RegisterModel.find({"username":req.body.student,"password":req.body.password},function(err,data){
        if(data.length!=0){
          res.json({"msg":"correct"});
        
        }
        else{
          res.json({"msg":"invalid username or password"});
        
        }
    })
});

app.post("/quiz",bp,function(req,res){
quizmodel(req.body).save();
})

app.post("/test",bp,function(req,res){
  testmodel(req.body).save();
  console.log(req.body);
})
 
app.post("/teacherlogin",bp,function(req,res){
  console.log(req.body);

  RegisterModel.find({"username":req.body.teacher,"password":req.body.password},function(err,data){
   console.log(data);
  }
  )
})

app.get("/fetchQuestions",function(req,res){
    testmodel.find({},function(err,data){
        res.json(data)
    });
});
app.listen(3000);
console.log("server running @ 3000");


