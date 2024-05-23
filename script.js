'use strict'

const randomArray = []

const generateRandomArray = (length, range) => {
	for (let i = 0; i < length; i++) {
		const number = Math.floor(Math.random() * range)
		randomArray.push(number)
	}
	return randomArray
}

const findMinMax = arr => {
	let max = -Infinity
	let min = Infinity

	let index = 0

	while (index < arr.length) {
		if (arr[index] < min) {
			min = arr[index]
		} else if (arr[index] > max) {
			max = arr[index]
		}
		index++
	}
	return [min, max]
}
const generatedArray = generateRandomArray(10, 100)
const [min, max] = findMinMax(randomArray)

console.log(generatedArray);
console.log(`Najmniejsza liczba: ${min} \nNajwiększa liczba: ${max}`)
