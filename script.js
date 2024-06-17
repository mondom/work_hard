'use strict'

const arr = [12, 6, 8, 17, 3, 10]

function findMin(arr) {
	const result = arr.reduce((min, current) => {
		return current < min ? current : min
	}, arr[0])
	console.log(result)
}

function findMax(arr) {
	const result = arr.reduce((max, current) => {
		return current > max ? current : max
	}, arr[0])
	console.log(result)
}

function calculateAverage(arr) {
	const average = arr.reduce(function (accumulator, currentValue, currentIndex) {
		accumulator += currentValue
		return currentIndex === arr.length - 1 ? accumulator / arr.length : accumulator
	}, 0)
	console.log(average.toFixed(2))
}

const max = findMax.apply(null, [arr])
const min = findMin.apply(null, [arr])
const average = calculateAverage.apply(null, [arr])
