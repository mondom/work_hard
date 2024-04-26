'use strict'
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

const numbers = [1, 2, 3, 4, 5]

const calculateSum = numbers => {
	let sum = 0
	numbers.forEach(num => {
		sum = sum + num
	});

	return sum
}
const result = calculateSum(numbers)

console.log(result);