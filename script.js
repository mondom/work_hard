'use strict'

function divideNumbers(a, b) {
	try {
		if (b === 0) {
			throw new Error('Nie można podzielić przez zero.')
		}
		return a / b
	} catch (error) {
		console.error(error.message)
	}
}

console.log(divideNumbers(10,2));
console.log(divideNumbers(10,0));
