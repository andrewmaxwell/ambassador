"use strict";angular.module("ambassadorApp",["ngAnimate","ngRoute","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ambassadorApp").controller("MainCtrl",["$http","$scope",function(a,b){a.get("ambassador-structure.json").then(function(a){b.mainSections=a.data})}]),$(document).on("click tap",".mainSection > h1, .sectionContentContainer > img",function(){var a=$(this).closest(".mainSection").toggleClass("open"),b=a.children(".sectionContentContainer");a.hasClass("open")?(b.find(".childText").hide(),b.children("img").slideUp(),b.children(".childContainer").slideDown(function(){$(this).find(".childText").each(function(a){var b=$(this);setTimeout(function(){b.fadeIn()},200*a)})})):(b.children(".childContainer").slideUp(),b.children("img").slideDown())}).on("click tap",".childSection",function(){console.log("yay!")}),angular.module("ambassadorApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);