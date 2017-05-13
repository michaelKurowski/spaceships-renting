'use strict';

(function () {
	var ang = angular.module('spaceships', []);
	ang.controller('searchMask', function ($scope) {
		$scope.locations = window.app.queryPropeties.locations;
		$scope.seats = window.app.queryPropeties.seats;
		$scope.listedArr = function (min, max) {
			var arr = [];
			for (var i = min; i <= max; i++) {
				arr.push(i);
			}
			return arr;
		};
	});
})();