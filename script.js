'use strict'
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

const oceny = [4, 3.5, 5, 4.5, 3, 4]

const obliczSrednia = oceny => {
	let sum = 0
	for (let i = 0; i < oceny.length; i++) {
		sum = sum + oceny[i]
	}
	const average = sum / oceny.length
	return average
}
console.log(obliczSrednia(oceny))
