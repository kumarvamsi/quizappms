let app=angular.module("myApp",[]);

app.controller("registerController",function($scope,$http){
  
  $scope.contain=function(){
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

});


app.controller("logincontroller",function($scope,$http){
  
  $scope.submit=function(){
      let data={
      "student":$scope.student,
      "password":$scope.password
      }
  
  console.log(data);
  $http.post("http://localhost:3000/login",data).then(function(response)
  {
    console.log(response);
  }).catch(function(error)
  {
    console.log(error);
  })

    }


});
app.controller("teacherlogincontroller",function($scope,$http){

  $scope.submit=function(){
    let data={
      "teacher":$scope.data,
      "password":$scope.pin
    }
    console.log(data);
    $http.post("http://localhost:3000/teacherlogin",data).then(function(responnse){
      console.log(response);

    }).catch(function(error){
      console.log(error);
    })
  }
})



app.controller("quizcontroller",function($scope,$http){

  $scope.submit=function(){
    let data={
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
    }).catch(function(error){
      console.log(error);
    })
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
      let data={
        "subject":$scope.subject,
        "question":$scope.question   
      }
      console.log(data);
      $http.post("http://localhost:3000/test",data).then(function(response){
        console.log(response);
      }).catch(function(error){
        console.log(error);
      })
    }
    
    
    })

    

    
    
 