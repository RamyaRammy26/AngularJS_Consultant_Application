var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		controller: "myCtrl",
		templateUrl: "allfiles.html"
	})
	 .otherwise({
        redirectTo: 'home'
      });
	
	
	
});
app.controller("myCtrl",function($scope){
	var countryList = [{name:"India",address:"14th Cross, Kalamandir,Marathahalli, Bangalore"},
						{name:"Germany",address:"148 Commercity Isols Road, M1 R43 Berlin, Germany"},
						{name:"Spain",address:"10 Via Della Consordia Road, S3,7ME Madrid, Spain"}];
		$scope.countries = countryList;		
		$scope.selectedOption = $scope.countries[1];
		
	$scope.template={
     "home":"home.html",
     "about":"about.html",
	 "services":"services.html",
     "case":"case.html",
	 "portfolio":"portfolio.html",
	 "news":"news.html",
	 "pages":"pages.html",
	 "shop":"shop.html",
	 "contact":"contacts.html"
   }
	
});