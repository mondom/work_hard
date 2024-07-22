"use strict"

function checkWeatherInCityA() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Słonecznie")
		}, 2000)
	})
}
function checkWeatherInCityB() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Pochmurno")
		}, 3000)
	})
}
function checkWeatherInCityC() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Śnieżyca")
		}, 1000)
	})
}

Promise.any([
	checkWeatherInCityA(),
	checkWeatherInCityB(),
	checkWeatherInCityC(),
]).then(result => {
	switch (result) {
		case "Słonecznie":
			console.log("W mieście A jest: " + result)
			break
			case'Pochmurno':
			console.log("W mieście B jest: " + result)
			break
			case'Śnieżyca':
			console.log("W mieście C jest: " + result)
	}
}).catch(err => {
	console.log('Wystąpił błąd: ' + err);
})
