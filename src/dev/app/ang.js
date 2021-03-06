
(function() {
	const ang = angular.module('spaceships', [])
	ang.controller('searchMask', ['$scope', function($scope) {
		document.getElementById('date-range').addEventListener('pickmeup-fill', function (e) {
			const dateRange = document.getElementById('date-range').value
																	.split(' - ')
																	.map(date => date.split('-'))
																	.map(date => 
																		date.map(numb => parseInt(numb))
																	)
			const start = new Date(dateRange[0][2], dateRange[0][1] - 1, dateRange[0][0])
			const end = new Date(dateRange[1][2], dateRange[1][1] - 1, dateRange[1][0])
			$scope.query.dateRange = [
				start.toLocaleString(),
				start.getTime()
			]
		})

		//$scope.
		$scope.classes = window.app.queryPropeties.class 
		$scope.locations = window.app.queryPropeties.locations 
		$scope.seats = window.app.queryPropeties.seats
		$scope.query = {}
		$scope.query.forChildren = false
		$scope.query.forDisabled = false
		$scope.test = false
		$scope.listedArr = (min, max, jmp) => {
			const arr = []
			for (let i = min ; i <= max ; i+=jmp) {
				arr.push(i)
			}
			return arr

		}
		$scope.searchQuery = () => {
			console.log('init query')
			console.log($scope.query.seats, $scope.query.priceLimit, $scope.query.forChildren, $scope.query.forDisabled)
			console.log($scope.query.origin, $scope.query.destination)
			console.log(window.app.spaceships.length)
			let tst = window.app.spaceships.filter( obj => {
				console.log(obj.origin, obj.destination)
				return 	obj.seats >= parseInt($scope.query.seats) && 
						obj.price <= parseInt($scope.query.priceLimit) &&
						($scope.query.forChildren ? obj.forChildren : true) &&
						($scope.query.forDisabled ? obj.forDisabled : true) &&
						obj.origin === $scope.query.origin &&
						obj.destination === $scope.query.destination
			})
			console.log(tst)
		}
	}])

})()
