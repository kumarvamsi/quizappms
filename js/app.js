let app=angular.module("myApp",[]);

app.controller("registerController",function($scope){
  
  $scope.contain=function(){
    let data={
        "username":$scope.username,
        "email":$scope.email,
        "phone":$scope.phone,
        "password":$scope.password,
        "confirm":$scope.confirm
    
      }
  
      console.log(data);

  }

});


app.controller("logincontroller",function($scope){
  
  $scope.submit=function(){
      let data={
      "student":$scope.student,
      "password":$scope.password
      }
  
  console.log(data);

    }


});

app.controller("logcontroller",function($scope){

$scope.submit=function(){
  let data={
    "data":$scope.data,
    "pin":$scope.pin
  }
  console.log(data);
}


})

app.controller("quizcontroller",function($scope){

  $scope.submit=function(){
    let data={
      "question":$scope.question,
      "first":$scope.first,
      "second":$scope.second,
      "third":$scope.third,
      "fourth":$scope.fourth
    }
    console.log(data);
  }
  
  
  })

  app.controller("textcontroller",function($scope){

    $scope.submit=function(){
      let data={
        "subject":$scope.subject,
        "question":$scope.question   
      }
      console.log(data);
    }
    
    
    })
  

 