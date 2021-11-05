var patient = angular.module('patient', ['ngRoute']);

patient.config(function ($routeProvider) {

});

patient.controller('patientController', function ($scope, $http) {
    $http({
        method: 'GET',
        url: '/Data/Doctors.json'
    }).then(function (data) {
        console.log('Hi');
        // $scope.doctor = data;
    }, function (error) {
        console.log('Error');
    });
})
//     $http.get("/Views/Doctors.json").then(successCallBack, errorCallBack);
//     function successCallBack(data) {
//         $scope.doctor = data;
//     }
//     function errorCallBack(response) {
//         console.log(response);
//     }

// });