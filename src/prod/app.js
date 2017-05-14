'use strict';

window.app = window.app || {};

window.app.querySpaceshipsBy = function (propetiesObj) {
	var minMaxDate = propetiesObj.date;
	var origin = propetiesObj.takeOf;
	var destination = propetiesObj.landing;
	var passengers = propetiesObj.passengers;

	app.querySpaceships.find(function (ship) {});
};

void function () {
	document.addEventListener('DOMContentLoaded', function () {
		initSliders();
		var futureDate = new Date();
		futureDate.setFullYear(2240, 10, 3);
		pickmeup('.date-input', {
			position: 'bottom',
			hide_on_select: true,
			mode: 'range',
			date: futureDate
		});
	});

	function initSliders() {
		var elems = $('[id^=to-slide-]');
		var elemsCount = elems.length;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			var _loop = function _loop() {
				var el = _step.value;

				var elId = parseInt(el.id.split('-')[2]);
				el.addEventListener('mousedown', function () {
					return showPage(elId);
				});
			};

			for (var _iterator = elems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				_loop();
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}
	function showPage(id) {
		$('#page-' + id).animate({
			height: '100vh',
			opacity: 1.0
		}, 1000);
		var elems = $('[id^=page-]');
		var elemsCount = elems.length;
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = elems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var el = _step2.value;

				var _elId = parseInt(el.id.split('-')[1]);
				if (_elId !== id) {
					$('#page-' + _elId).animate({
						height: '0vh',
						opacity: 0
					}, 1000);
				}
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	}
}();