'use strict'

const calculator = {
	x: 5,
	y: 3,
	result: null,
}

function sum(a, b) {
	return a + b
}
function multiply(a, b) {
	return a * b
}
function substract(a, b) {
	return a - b
}

calculator.result = sum.call(calculator, calculator.x, calculator.y)
console.log(`Wynik dodawania: ${calculator.result}`)

calculator.result = multiply.call(calculator, calculator.x, calculator.y)
console.log(`Wynik dodawania: ${calculator.result}`)

calculator.result = substract.call(calculator, calculator.x, calculator.y)
console.log(`Wynik dodawania: ${calculator.result}`)
