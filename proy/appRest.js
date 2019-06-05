String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

var app = angular.module("appRest",[]);
var respuesta = [];


app.controller("controller",function($scope,$http){
    $http.get("https://jsonplaceholder.typicode.com/users").
    then(function(response){
     
        if (response["status"] != 200)
        {   $scope.respuesta = "Error";
            
        }
        else
        {
            $scope.respuesta = response["data"];
            $scope.titulos = Object.keys(response["data"][0]);
            $scope.subtitulos = Object.keys(response["data"][0]["address"]);
            
            
            respuesta = response["data"];
         
            
        }
        
      
    });
});
