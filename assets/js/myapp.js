var app = angular.module("Myapp",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"home.html"
	})
	.when("/home",{
		templateUrl:"home.html"
	})
	.when("/about",{
		templateUrl:"about.html"
	})
	.when("/services",{
		templateUrl:"services.html"
	})
	.when("/contact",{
		templateUrl:"contact.html"
	})
	
});