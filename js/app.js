let app=angular.module("myApp",[]);

app.controller("registerController",function($scope,$http){
  
  $scope.contain=function(){
   console.log($scope.email);
      if($scope.username===undefined | $scope.username===""){
        $scope.usernameerror="username cannot be blank";

       }
      else if($scope.email===undefined| $scope.email===""){

          $scope.emailerror="email cannot be blank";
  
         }
         else if($scope.phone===undefined | $scope.phone==="")
         {
           $scope.phoneerror="mobile number cannot be blank";
         }
         else if($scope.password===undefined | $scope.password==="")
         {
           $scope.passworderror="password cannot be blank";
         }
         else if($scope.confirm===undefined | $scope.confirm==="")
         {
           $scope.confirmerror="password cannot be blank";
         }
         
        else{
          let data={
            "username":$scope.username,
            "email":$scope.email,
            "phone":$scope.phone,
            "password":$scope.password,
            "confirm":$scope.confirm
        
          }
          
      console.log(data);
      $http.post("http://localhost:3000/register",data).then(function(response){
          console.log(response);
          $scope.msg=response.data.msg;
      }).catch(function(error){
          console.log(error);

      })
    }
    }
  });

app.controller("logincontroller",function($scope,$http){
  
  $scope.submit=function(){
    if($scope.student===undefined | $scope.student==="")
    {
      $scope.studenterror="name cannot be blank";
    }
    else if($scope.password===undefined |$scope.password==="")
    {
      $scope.passworderror="password cannot be blank";
    }
    else
    {
      let data={
      "student":$scope.student,
      "password":$scope.password
      }
    
  
  console.log(data);
  $http.post("http://localhost:3000/login",data).then(function(response)
  {
    console.log(response);
    $scope.msg=response.data.msg;
  }).catch(function(error)
  {
    console.log(error);
  })
}

    }
});
app.controller("teacherlogincontroller",function($scope,$http){

  $scope.submit=function(){
    if($scope.teacher===undefined | $scope.teacher==="")
    {
       $scope.teachererror="username conot be blank";
    }
    else if($scope.password===undefined |$scope.password==="")
    {
      $scope.passworderror="password cannot be blank";
    }
    else{

    let data={
      "teacher":$scope.teacher,
      "password":$scope.password
      }
    
    console.log(data);
    $http.post("http://localhost:3000/teacherlogin",data).then(function(responnse){
      console.log(response);
     
    }).catch(function(error){
      console.log(error);
    })
  }
}

});



app.controller("quizcontroller",function($scope,$http){

  $scope.submit=function(){
    if($scope.name===undefined |$scope.name==="")
    {
      $scope.nameerror="name field manditory";
    }
    else if($scope.question===undefined| $scope.question==="")
    {
      $scope.questionerror="question field mandatory ";
    }
    else if($scope.first===undefined | $scope.first==="")
    {
      $scope.firsterror="option field mandatory ";
    }
    else if($scope.second===undefined| $scope.second==="")
    {
      $scope.seconderror="option field mandatory ";
    }
    else if($scope.third===undefined| $scope.third==="")
    {
      $scope.thirderror="option field mandatory ";
    }
    else if($scope.fourth===undefined| $scope.fourth==="")
    {
      $scope.fourtherror="option field mandatory ";
    }
    else if($scope.answer===undefined| $scope.answer==="")
    {
      $scope.answererror="please select the answer";
    }
   
    else{
    let data={
      "name":$scope.name,
      "question":$scope.question,
      "first":$scope.first,
      "second":$scope.second,
      "third":$scope.third,
      "fourth":$scope.fourth,
      "answer":$scope.answer
    }
    console.log(data);
    $http.post("http://localhost:3000/quiz",data).then(function(response){
      console.log(response);
      $scope.msg=response.data.msg;
    }).catch(function(error){
      console.log(error);
    })
  }
}
  
  
  })

  app.controller("scheduleController",function($scope,$http){
      $http.get("http://localhost:3000/fetchQuestions").then(function(response){
          $scope.schedules=response.data;
      }).catch(function(response){

      });
  });

  app.controller("testcontroller",function($scope,$http){

    $scope.submit=function(){
      if($scope.subject===undefined| $scope.subject==="")
      {
        $scope.subjecterror="subject field connot be blank";
      }
      else if($scope.question===undefined |$scope.question==="")
      {
        $scope.questionerror="enter number of questions";
      }
      else{
      let data={
        "subject":$scope.subject,
        "question":$scope.question   
      }
      console.log(data);
      $http.post("http://localhost:3000/test",data).then(function(response){
        console.log(response);
        $scope.msg=response.data.msg;
      }).catch(function(error){
        console.log(error);
      })
    }
  } 
    });

    function myfunction()
    {

      document.getElementById("msg").innerHTML="question successfully added";
    }

    

    
    
 