'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'assets/angular-partials/view1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'assets/angular-partials/view2.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
    
	var largedataset = [];

	var smalldataset = [];

	

	d3.csv("assets/csv/olympicsmorethanonemedal.csv", function(d) {
	
	
		smalldataset = d.map(function(d) {
		return {Athlete: d["Athlete"],
				Age: d["Age"],
				Country: d["Country"],
				Year: d["Year"],
				ClosingCeremonyDate: d["Closing Ceremony Date"],
				Sport: d["Sport"],
				GoldMedals: d["Gold Medals"],
				SilverMedals: d["Silver Medals"],
				BronzeMedals: d["Bronze Medals"],
				TotalMedals: d["Total Medals"]};
		});
	});

            
	d3.csv("assets/csv/olympics.csv", function(d) {
	
	
		largedataset = d.map(function(d) {
		return {Athlete: d["Athlete"],
				Age: d["Age"],
				Country: d["Country"],
				Year: d["Year"],
				ClosingCeremonyDate: d["Closing Ceremony Date"],
				Sport: d["Sport"],
				GoldMedals: d["Gold Medals"],
				SilverMedals: d["Silver Medals"],
				BronzeMedals: d["Bronze Medals"],
				TotalMedals: d["Total Medals"]};
		});
	});