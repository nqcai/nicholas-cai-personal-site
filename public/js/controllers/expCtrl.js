var expCtrl = angular.module('expCtrl', []);

expCtrl.controller('expCtrl', function($scope, Experience) {
	$scope.formData = {};

	Experience.getAll()
		.success(function(data) {
			$scope.projects = data;
		});
});