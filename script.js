'use strict'
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

const arr = [23, 24, 22, 25, 21]
let sum = 0

const calculateAverageTemperature = (tempData, callback) => {
	for (let i = 0; i < tempData.length; i++) {
	 	sum = sum + tempData[i]
	}
	const average = sum / tempData.length
	callback(average)
}

const displayAverageTemperature = (average) => {
	console.log(`Średnia temperatura to: ${average}`);
}
calculateAverageTemperature(arr, displayAverageTemperature)


