'use strict'
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

const calculateTax = value => {
	const taxRate = 0.23

	const score = value * taxRate
	console.log(score);
}

calculateTax(1000)