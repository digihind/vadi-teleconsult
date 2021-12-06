
var doctor = angular.module('doctor', ['ngRoute']);

doctor.controller('doctorController', function ($scope) {
    $scope.patient = [
        {
            "name": "Harshit Arora",
            "age": 24,
            "phone_no": 9780123234,
            "issue": "Teeth Pain",
            "thumb": "/pat3.jpeg"
        },
        {
            "name": "Ishita Dutta",
            "age": 34,
            "phone_no": 9780343234,
            "issue": "Severe back pain",
            "thumb": "/pat7.jpeg"
        },
        {
            "name": "Aatif Aslam",
            "age": 37,
            "phone_no": 7980123234,
            "issue": "Stomach ache",
            "thumb": "/pat1.jpeg"
        },
        {
            "name": "Shipra Sharma",
            "age": 22,
            "phone_no": 9780123278,
            "issue": "Headache cough and cold",
            "thumb": "/pat2.jpeg"
        }
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