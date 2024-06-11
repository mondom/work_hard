'use strict'

function calculateAverage(...numbers) {
	let sum = 0
	for (const num of numbers) {
		sum += num
	}
	return (sum / numbers.length).toFixed(2)
}

const result = calculateAverage(1, 5, 6, 7, 5, 4, 4, 5, 6, 4, 7, 10)
console.log(result)
