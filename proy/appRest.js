//Se genera el modulo de la App
var app = angular.module("appRest",[]);
//Vector para hacer debugging de la respuesta
var respuesta = [];

//Se genera el controlador  con REST para hacer las consultas
app.controller("controller",function($scope,$http){
    //Se hace la peticion rest
    $http.get("https://jsonplaceholder.typicode.com/users").
    then(function(response){
        //Se revisa si el status de la peticion fue exitosa o fallo
        if (response["status"] != 200)
        {   $scope.respuesta = "Error";
            
        }
        else
        {
            //Se extrae la data de la pagina indicada
            
            $scope.respuesta = response["data"];
            $scope.titulos = Object.keys(response["data"][0]);//Necesario para las tablas dinamicas
            respuesta = response["data"];
            
        }
        
      
    });
});
