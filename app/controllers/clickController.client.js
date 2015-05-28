'use strict';

// Begin by using an IIFE (immediately invoked function expression)
// This binds the scope of the variabes to this file
(function () {
	angular
		// Begin by defining our Angular module - this is used by ng-app in HTML files
		// Define ngResource as a requirement
		.module('clementineApp', ['ngResource'])
		// Define name of this controller - used by ng-controller in HTML files
		.controller('clickController',
			// Define $scope & $resource as dependencies for this controller
			['$scope',
			'$resource',

			function ($scope, $resource) {

				// Bind our $resource object to the Click variable and the API URL
				var Click = $resource('/api/clicks');

				// Define the getClicks() method witihn the $scope object
				// This is used within the HTML file for the ng-click directive
				$scope.getClicks = function () {
					// Query the data in the API. Note that the $resource.query method...
					// requires an array in the API unless otherwise specified
					Click.query(function (results) {
						// Bind the clicks property from the first element of the array...
						// to the $scope.clicks variable
						// $scope.clicks is referenced with the HTML file as {{ clicks }}
						$scope.clicks = results[0].clicks;
					});
				};

				// Get the number of clicks from the API
				$scope.getClicks();

				// Define the addClick() method witihn the $scope object
				// This is used within the HTML file for the ng-click directive
				$scope.addClick = function () {
					// The $resource.save method will prompt an HTTP post request...
					// to the server
					Click.save(function () {
						// After the post request, retrieve the number of clicks again
						$scope.getClicks();
					});
				};

				// Define the resetClicks() method witihn the $scope object
				// This is used within the HTML file for the ng-click directive
				$scope.resetClicks = function () {
					// The $resource.remove method will prompt an HTTP delete request...
					// to the server
					Click.remove(function () {
						// After the delete request, retrieve the number of clicks again
						$scope.getClicks();
					});
				};

		}]);
})();
