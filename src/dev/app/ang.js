
(function() {
	const ang = angular.module('spaceships', []);
	ang.controller('searchMask', function($scope) {
		$scope.locations = window.app.queryPropeties.locations 
		$scope.seats = window.app.queryPropeties.seats 
		$scope.listedArr = (min, max) => {
			const arr = []
			for (let i = min ; i <= max ; i++) {
				arr.push(i)
			}
			return arr
		}
	})

})()
