let flights = []
for (let i = 0 ; i < main.spaceships.length * 10 ; i++) {
	let newFlght = utils.randElemFrom(main.spaceships)
	newFlght.price = utils.randMinMax(
		app.queryPropeties.prices[0], 
		app.queryPropeties.prices[1])
	newFlght.class = utils.randElemFrom(app.queryPropeties.class)
	newFlght.origin = utils.randElemFrom(app.queryPropeties.locations)
	newFlght.destination = utils.randElemFrom(app.queryPropeties.locations.filter(e => e !== newFlght.origin))

	flights.push(newFlght)
}
document.addEventListener('DOMContentLoaded',
	() => download('flights.js', JSON.stringify(flights))
)