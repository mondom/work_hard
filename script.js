'use strict'

let array = []

const genArr = (len, range) => {
	for (let i = 0; i < len; i++) {
		let num = Math.floor(Math.random() * range)
		array.push(num)
	}
}

const findMinMax = arr => {
	let min = Infinity
	let max = -Infinity

	for (const number of arr) {
		min = Math.min(min, number)
		max = Math.max(max, number)
	}
	return [min, max]
}

genArr(10, 100)
console.log(array)
const [min, max] = findMinMax(array)
console.log('Najmniejsza liczba:', min)
console.log('Najwieksza liczba:', max)
