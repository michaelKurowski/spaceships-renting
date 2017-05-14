window.app = window.app || {}


window.app.querySpaceshipsBy = propetiesObj => {
	const minMaxDate = propetiesObj.date
	const origin = propetiesObj.takeOf
	const destination = propetiesObj.landing
	const passengers = propetiesObj.passengers

	app.querySpaceships.find( ship => {

	})
}


void (function () {
	document.addEventListener('DOMContentLoaded', () => {
		initSliders()
		const futureDate = new Date()
		futureDate.setFullYear(2240, 10, 3)
		pickmeup('.date-input', {
			position: 'bottom',
			hide_on_select: true,
			mode: 'range',
			date: futureDate
		})
		
	})


	function initSliders() {
		let elems = $('[id^=to-slide-]')
		let elemsCount = elems.length
		for (let el of elems) {
			let elId = parseInt(  el.id.split('-')[2]  )
			el.addEventListener('mousedown', () => 
				showPage(elId)
			)
		}
	}
	function showPage(id) {
		$('#page-' + id).animate({
			height: '100vh',
			opacity: 1.0
		}, 1000)
		let elems = $('[id^=page-]')
		let elemsCount = elems.length
		for (let el of elems) {
			let elId = parseInt(  el.id.split('-')[1]  )
			if (elId !== id) {
				$('#page-' + elId).animate({
					height: '0vh',
					opacity: 0
				}, 1000)
			}
		}
	}

	
}())










