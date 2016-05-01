(function (window, document, undefined) {
	"use strict";

	function init () {
		var opts = document.getElementById("laptopbrands");

		opts.addEventListener('change', checkForOther, false);
	}

	function checkForOther (e) {

	}

	window.addEventListener('load', init, false);

})(window, document);