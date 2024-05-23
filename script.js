'use strict'

const randomArr = []

const arrGenerator = (length, range) => {
	let i = 0
	while (i < length) {
		let number = Math.floor(Math.random() * range)
		randomArr.push(number)
		i++
	}
}

const findMinMax = arr => {
	let min = Infinity
	let max = -Infinity

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i]
		} else if (arr[i] > max) {
			max = arr[i]
		}
	}

	return [min, max]
}

const generatedArr = arrGenerator(10, 200)
console.log(randomArr)
const [min, max] = findMinMax(randomArr)
console.log(`Wartość max to: ${max}\nWartość min to: ${min}`)
