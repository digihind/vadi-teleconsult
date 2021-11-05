var patient = angular.module('patient', ['ngRoute']);

patient.config(function ($routeProvider) {

});

patient.controller('patientController', function ($scope) {
    $scope.doctor = [
        {
            "name": "Dr. Aman Jain",
            "spec": "Cardiologist",
            "fee": 200,
            "thumb": "/Pictures/abcd.jpg"
        },
        {
            "name": "Dr. Shruti Jha",
            "spec": "Opthalmologist",
            "fee": 200,
            "thumb": "/Pictures/pqrs.jpeg"
        },
        {
            "name": "Dr. Kamal Chhajer",
            "spec": "Child Specialist",
            "fee": 200,
            "thumb": "/Pictures/xyz.jpg"
        },
        {
            "name": "Dr. Shivram Goenka",
            "spec": "Neuro-Surgeon",
            "fee": 200,
            "thumb": "/Pictures/abcd.jpg"
        }
    ]
})
// patient.controller('patientBController', function ($scope, $http) {
//     $http({
//         method: 'GET',
//         url: '/Data/Doctors.json'
//     }).then(function (data) {
//         console.log(data);
//         $scope.doctor = data;
//     }, function (error) {
//         console.log('Error');
//     });
// })
