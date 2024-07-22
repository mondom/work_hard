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

Promise.any([checkWeatherInCityA(), checkWeatherInCityB(), checkWeatherInCityC()])
