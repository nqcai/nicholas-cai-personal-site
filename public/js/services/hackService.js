angular.module('hackService', [])

	.factory('Hack', function($http) {

		var myFactory = {};

		myFactory.getAll = function() {
			return $http.get('/get-hacks');
		};

		return myFactory;

	});