'use strict';

(function () {
	angular
		.module('clementineApp', [])
		.controller('clickController', function ($scope) {

			$scope.clicks = 0;

			$scope.addClick = function () {
				$scope.clicks += 1;
			};

		});
})();
