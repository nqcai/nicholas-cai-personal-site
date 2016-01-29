angular.module('experienceService', [])
	
	.factory('Experience', function($http) {
		var myFactory = {};

		myFactory.getAll = function() {
			return $http.get('/get-experiences');
		};

		return myFactory;
		
	});