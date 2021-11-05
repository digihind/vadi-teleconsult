var patient = angular.module('patient', ['ngRoute']);

patient.config(function ($routeProvider) {

});

patient.controller('patientController', function ($scope) {
    $scope.doctor = [{
        name: "Dr. Aman Jain",
        spec: "heart",
        fee: 200,
        thumb: "Pictures/abcd.jpg",
    },
    {
        name: "Dr. Shruti Jha",
        spec: "brain",
        fee: 200,
        thumb: "Pictures/pqrs.jpeg",
    },
    {
        name: "Dr. Kamal Chhajer",
        spec: "teeth",
        fee: 200,
        thumb: "Pictures/xyz.jpg",
    }
    ]
})