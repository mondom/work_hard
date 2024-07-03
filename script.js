'use strict'

function divideNumbers(a, b) {
	try {
		if (b === 0) {
			throw new Error('Nie mozna dzielic przez zero!')
		}
		return a / b
	} catch (error) {
		console.error(error.message)
	}
}

console.log(divideNumbers(10, 2))
console.log(divideNumbers(8, 0))
console.log(divideNumbers(12, 4))

function substract(x, y) {
	try {
		if (x < y) {
			throw new Error('Liczba nie może być ujemna.')
		}
		return x - y
	} catch (error) {
		console.error(error.message)
	}
}

console.log('---------------------')

console.log(substract(10, 9))
console.log(substract(10, 12))



