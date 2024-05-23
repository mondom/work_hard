'use strict'

const generateRandomArray = (length, range) => {
	const randomArray = []
	for (let i = 0; i < length; i++) {
		const number = Math.floor(Math.random() * range)
		randomArray.push(number)
	}
	console.log(randomArray);
}

generateRandomArray(10, 100)
