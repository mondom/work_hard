'use strict'

function calculateFactorial(num) {
	if (num === 0 || num === 1) return 1

	if (num > 1) {

		let factorial = calculateFactorial(num - 1)
		factorial *= num
		return factorial
	}
}
const result = calculateFactorial(5)
console.log(result)
