/**
 * Home Controller!
 */
'use strict';
angular.module('app')
	.controller('homeCtrl', ['$scope',
		function($scope) {
			$scope.title = 'Home';
		}
	]);