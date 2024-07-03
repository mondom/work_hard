'use strict'

function fetchData(callback) {
	setTimeout(function () {
		const data = "Witaj, swiecie!";
		callback(data);
	}, 2000);
}

fetchData(function (response) {
	console.log(response);
});
