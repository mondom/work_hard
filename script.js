'use strict'
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

let taxRate = .50

const calculateTax = (value, taxRate = 0.15) => {
	const score = value * taxRate
	return score
}

console.log(calculateTax(100, taxRate));
