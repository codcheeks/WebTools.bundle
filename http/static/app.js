﻿'use strict'
var webtools = angular.module('webtools', ['ngRoute', 'ngDialog']);

webtools.config(['$interpolateProvider', '$routeProvider', '$locationProvider', function ($interpolateProvider, $routeProvider, $locationProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    $routeProvider
    .when("/", {
        templateUrl: "/static/home/home.html",
        controller: "homeController"
    })
    //Tools
    .when("/sub", {
        templateUrl: "/static/sub_management/sub.html",
        controller: "subController"
    })
    .when("/logs", {
        templateUrl: "/static/logs/logs.html",
        controller: "logsController"
    })
    .when("/uas", {
        templateUrl: "/static/uas/uas.html",
        controller: "uasController"
    })
    .when("/fm", {
        templateUrl: "/static/findmedia/fm.html",
        controller: "fmController"
    })
    //Options
    .when("/theme", {
        templateUrl: "/static/theme/theme.html",
        controller: "themeController"
    })
    .when("/cl", {
        templateUrl: "/static/changelog/cl.html",
        controller: "clController"
    })
    //Otherwise show page doesnt exist 404
    .otherwise({
        templateUrl: "/static/404/404.html"
    });
}]);

webtools.run(['webtoolsService', 'themeService', function (webtoolsService, themeService) {
    webtoolsService.loadWebToolsVersion();
    themeService.loadActiveTheme();
}]);