const utils = window.main.utils
const valMethods = utils.validate
const seats = window.app.queryPropeties.seats
const maxSpeed = window.app.queryPropeties.maxSpeed
const productionYear = window.app.queryPropeties.productionYear
const locations = window.app.queryPropeties.locations 

function spaceship (shipObj) {
	let propeties = {
		name: valMethods.vString,
		productionYear: valMethods.vNumber,
		maxSpeed: valMethods.vNumber,
		seats: valMethods.vNumber,
		pickUp: valMethods.vString,
		landing: valMethods.vString,
		description: valMethods.vString
	}
	let wrongPropeties = Object.keys(propeties).filter( property => {
		let valMethod = propeties[property]
		return !valMethod(shipObj[property])
	})
	if (wrongPropeties.length !== 0) throw `Unable to create spaceship object ${JSON.stringify(shipObj)}, wrong propeties: ${wrongPropeties}`
	return shipObj
}

function randomSpaceship() {
	const pickUp = utils.randElemFrom(locations)
	const restLocations = locations.filter(el => el !== pickUp)
	const landing = utils.randElemFrom(restLocations)

	return spaceship({
		name: String.fromCharCode(utils.randMinMax(65, 90)) + '-' +
			utils.randMinMax(100, 900),
		productionYear: utils.randMinMax(productionYear[0], productionYear[1]),
		maxSpeed: utils.randMinMax(maxSpeed[0], maxSpeed[1]),
		seats: utils.randMinMax(seats[0], seats[1]),
		forDisabled: Math.random() > 0.5,
		forChildren: Math.random() > 0.5,
		pickUp,
		landing,
		description: ''
	})
}

function descriptionMaker() {
	let countries = ['Polish', 'American', 'Russian', 'Japan', 'Chineese', 'Hungarian', 'Czech', 'Slovak', 'Ethiopian', 'Mongolian']
	let maxSpeedAdj = ['slow but solid', 'fast', 'extremly fast', 'lightning fast']
	let seatsAdj = ['two person', 'medium sized', 'big', 'huge']
}
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

main.spaceships = []

let amountOfSpaceships = 100
while (amountOfSpaceships--) {
	main.spaceships.push( spaceship(randomSpaceship()) )
}





