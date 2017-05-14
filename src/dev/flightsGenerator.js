
for (let i = 0 ; i < main.spaceships.length * 10 ; i++) {
	let newFlght = utils.randElemFrom(main.spaceships)
	newFlght.price = utils.randMinMax(
		app.queryPropeties.prices[0], 
		app.queryPropeties.prices[0])
	newFlght.class = utils.randElemFrom(app.queryPropeties.class)

	flights.push(newFlght)
}
document.addEventListener('DOMContentLoaded',
	() => download('flights.js', JSON.stringify(flights))
)