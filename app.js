var patient = angular.module('patient', ['ngRoute']);

patient.controller('patientController', function ($scope) {
    $scope.doctor = [
        {
            "name": "NAME: Dr. Aman Jain",
            "spec": "SPECIALISATION: Interventional Cardiologist & Diabetologist",
            "fee": "FEES: 200",
            "degree": "MD(Medicine), DNB(Cardiology)",
            "thumb": "/Pictures/abcd.jpg"
        },
        {
            "name": "NAME: Dr. Shruti Jha",
            "spec": "SPECIALISATION: Opthalmologist",
            "fee": "FEES: 200",
            "degree": "MD(Medicine) MS(Master of Surgery)",
            "thumb": "/Pictures/pqrs.jpeg"
        },
        {
            "name": "NAME: Dr. Kamala Chhajer",
            "spec": "SPECIALISATION: Child Specialist",
            "fee": "FEES: 200",
            "degree": "MCh(Master of Chirurgiae), MD(Medicine)",
            "thumb": "/Pictures/DOC1.jpeg"
        },
        {
            "name": "NAME: Dr. Shivram Goenka",
            "spec": "SPECIALISATION: Dentist",
            "degree": "MD(Medicine), BDS(Bachelor of Dental Surgeries)",
            "fee": "FEES: 200",
            "thumb": "/Pictures/xyz.jpg"
        },
        {
            "name": "NAME: Dr. Seema Jha",
            "spec": "SPECIALISATION: Child Specialist",
            "degree": "MD(Medicine), MS(ENT)",
            "fee": "FEES: 200",
            "thumb": "/Pictures/DOC3.jpeg"
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

patient.controller('patientBController', function ($scope, $http) {
    $http({
        method: 'GET',
        url: '/Data/Doctors.json'
    }).then(function (data) {
        console.log(data);
        $scope.doctor = data;
    }, function (error) {
        console.log('Error');
    });
})
