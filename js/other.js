(function (window, document, undefined) {
	"use strict";

	function main () {
		var brands = document.getElementById("laptopBrands"),
		    other = document.getElementById("other");

		brands.addEventListener("change", function () {
			if (brands.selectedIndex === brands.options.length - 1 &&
						other.classList.contains("hidden")) {
				other.classList.remove("hidden");
			}
			else if (!other.classList.contains("hidden")) {
				other.classList.add("hidden");
				other.value = "";
			}
		}, false);
	}

	window.addEventListener("load", main, false);

})(window, document);