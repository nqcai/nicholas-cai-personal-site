angular.module('projectService', []) 
 .factory('Project', function($http) { 
 // create the object
 var myFactory = {};

 // a function to get all the stuff
 myFactory.getAll = function() {
 	return $http.get('/get-projects');
 };

 return myFactory;

});
