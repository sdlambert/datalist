(function (window, document, undefined) {
	"use strict";

	function main () {
		var genders = document.getElementById('genders'),
		    nameSearch = document.getElementById('nameSearch');

		genders.addEventListener('change', function (e) {
			if (e.target.id === "male")
					nameSearch.setAttribute("list", "maleNames");
			else
					nameSearch.setAttribute("list", "femaleNames");
		}, false);

	}

	window.addEventListener("load", main, false);

})(window, document);