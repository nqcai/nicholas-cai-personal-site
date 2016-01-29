var expCtrl = angular.module('expCtrl', []);

expCtrl.controller('expCtrl', function($scope, Project) {
	$scope.formData = {};

	Project.getAll()
		.success(function(data) {
			$scope.projects = data;
		})
})