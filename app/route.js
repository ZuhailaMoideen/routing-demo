var app = angular.module("sample", ["ngRoute"]);
app.config(function($routeProvider){

    $routeProvider
    .when("/course", {
        templateUrl : "templates/course.html"
    })
    .when("/department", {
        templateUrl : "templates/department.html"
    });
});
