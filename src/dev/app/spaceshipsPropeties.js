(function() {
	//Spaceships
	window.app = window.app || {}
	window.app.queryPropeties = {}
	window.app.queryPropeties.seats = [3, 20]
	window.app.queryPropeties.maxSpeed = [10000, 20000]
	window.app.queryPropeties.productionYear = [2100, 2240]
	window.app.queryPropeties.locations = [
		'Mars',
		'Earth',
		'Jupiter',
		'Europa',
		'Titan',
		'Pluton',
		'Io'
	]
	window.app.queryPropeties.facilitiesForDisabled = 'bool'
	window.app.queryPropeties.facilitiesForChildren = 'bool'
	//Flights
	window.app.queryPropeties.prices = [4500, 25000]	
	window.app.queryPropeties.class = ['Storeroom', 'Economic', 'Business', 'Privilleged']
	window.app.queryPropeties.class
})()

