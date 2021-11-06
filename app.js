var patient = angular.module('patient', ['ngRoute']);

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
        },
        {
            "name": "Dr. Kamal Chhajer",
            "spec": "Child Specialist",
            "fee": 200,
            "thumb": "/Pictures/xyz.jpg"
        },
    ]
})
$(document).ready(function () {
    var cnt = 0;
    $(".chat").click(function () {
        cnt++;
        console.log('CLK');
        $(".frm").toggle();
        console.log($("span").html());
        $("#details").attr("class", "blur");


    });
    $('.header-area span').click(function () {
        console.log('clicked');
        console.log($(".frm").html());
        $(".frm").toggle();
        $("#details").attr("class", "none");
    })
});

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
