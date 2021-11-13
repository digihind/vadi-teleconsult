
var doctor = angular.module('doctor', ['ngRoute']);

doctor.controller('doctorController', function ($scope) {
    $scope.patient = [
        {
<<<<<<< HEAD
            "name": "NAME: Harshit Arora",
            "age": "AGE:24",
            "phone_no": "MOBILE NO: 9780123234",
            "issue": "ISSUES: Teeth Pain",
            "thumb": "\Pictures\PAT1.jpeg"
        },
        {
            "name": "NAME: Ishita Dutta",
            "age": "AGE: 34",
            "phone_no": "MOBILE NO: 9780343234",
            "issue": "ISSUES: Severe back pain"
        },
        {
            "name": "NAME: Aafiya Ahmed",
            "age": "AGE:37",
            "phone_no": "MOBILE NO: 7980123234",
            "issue": "ISSUES: Stomach ache"
        },
        {
            "name": "NAME: Shipra Sharma",
            "age": "AGE: 22",
            "phone_no": "MOBILE NO: 9780123278",
            "issue": "ISSUES: Headache cough and cold"
=======
            "name": "Harshit Arora",
            "age": 24,
            "phone_no": 9780123234,
            "issue": "Teeth Pain",
            "thumb": "/Pictures/pat3.jpeg"
        },
        {
            "name": "Ishita Dutta",
            "age": 34,
            "phone_no": 9780343234,
            "issue": "Severe back pain",
            "thumb": "/Pictures/pat7.jpeg"
        },
        {
            "name": "Aatif Aslam",
            "age": 37,
            "phone_no": 7980123234,
            "issue": "Stomach ache",
            "thumb": "/Pictures/pat1.jpeg"
        },
        {
            "name": "Shipra Sharma",
            "age": 22,
            "phone_no": 9780123278,
            "issue": "Headache cough and cold",
            "thumb": "/Pictures/pat2.jpeg"
>>>>>>> 553ba1594e9f7f5cef81d685b404963432f22364
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