var patient = angular.module('patient', ['ngRoute']);

patient.config(function ($routeProvider) {

});

patient.controller('patientController', function ($scope) {
    $scope.doctor = [{
        name: "abcd",
        spec: "heart",
        fee: 200,
        thumb: "Pictures/abcd.jpg",
    },
    {
        name: "pqrs",
        spec: "brain",
        fee: 200,
        thumb: "Pictures/pqrs.jpeg",
    },
    {
        name: "xyz",
        spec: "teeth",
        fee: 200,
        thumb: "Pictures/xyz.jpg",
    }
    ]
})