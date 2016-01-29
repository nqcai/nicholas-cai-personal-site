var projectCtrl = angular.module('projectCtrl', ['projectService']);

projectCtrl.controller('projectCtrl', function($scope, Project) {
	// Initializes some variables
	$scope.formData = {};

	Project.getAll()
    // promise object
		.success(function(data) {
		// bind the data to a controller variable // 
			$scope.projects = data;
		});
});