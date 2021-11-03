
var patient = angular.module('patient',[]);
patient.controller('patientController',function($scope){
    $scope.doctor=[{
        name:"abcd",
        spec:"heart"
    },
    {
        name:"pqrs",
        spec:"brain"
    },
    {
        name:"xyz",
        spec:"teeth"
    }
]
})