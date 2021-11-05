
var doctor = angular.module('doctor', ['ngRoute']);

doctor.config(function ($routeProvider) {

});

doctor.controller('doctorController', function ($scope) {
    $scope.patient = [
        {
            "name": "Harshit Arora",
            "age": 24,
            "phone_no":9780123234,
            "issue":"Teeth Pain"
        },
        {
            "name": "Ishita Dutta",
            "age": 34,
            "phone_no":9780343234,
            "issue":"Severe back pain"
        },
        {
            "name": "Aafiya Ahmed",
            "age": 37,
            "phone_no":7980123234,
            "issue":"Stomach ache"
        },
        {
            "name": "Shipra Sharma",
            "age": 22,
            "phone_no":9780123278,
            "issue":"Headache cough and cold"
        }
    ]
})