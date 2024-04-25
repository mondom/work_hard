'use strict'
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

function calculateBMI(height, weight) {
	return weight / (height * height)
}

const bmiResult = calculateBMI(1.8, 66)
console.log(bmiResult.toFixed(2))
