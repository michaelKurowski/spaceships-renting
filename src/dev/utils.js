void function () {
	window.main = window.main || {}
	const utils = window.main.utils = window.main.utils || {}
	utils.validate = {
		vString: val => typeof val === 'string',
		vNumber: val => typeof val === 'number',
		vYear: val => (typeof val === 'number') &&
										((val + '').length === 4) &&
											val >= 2100 &&
												val <= 2240

	}
	utils.randMinMax = (min, max, int = true) => {
		let result = (Math.random() * (max - min) + min)
		if (int) result = Math.round(result)
		return result
	}
	utils.randElemFrom = arr => {
		return arr[utils.randMinMax(0, arr.length-1)]
	}
}()
