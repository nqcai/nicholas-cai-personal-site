var app = angular.module('nicholas_cai', 
	[
	'projectCtrl',
	'expCtrl',
	'hackCtrl',
	'ngRoute'
	])
// Config angular routing 
.config(function($routeProvider) {

	$routeProvider.when('/projects', {

		controller: 		'projectCtrl',
		templateUrl: 		'partials/projects.html',

	}).when('/experiences', {
		
		controller: 		'expCtrl',
		templateUrl: 		'partials/experiences.html',
	
	}).when('/hacks', {
		
		controller: 		'hackCtrl',
		templateUrl: 		'partials/hacks.html',

	}).otherwise({redirectTo: '/projects'})
});