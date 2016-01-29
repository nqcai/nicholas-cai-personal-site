var hackCtrl = angular.module('hackCtrl', ['hackService']);

hackCtrl.controller('hackCtrl', function($scope, Hack) {

	$scope.formData = {};

	Hack.getAll()
		.success(function(data) {
			$scope.hacks = data;
		});
});