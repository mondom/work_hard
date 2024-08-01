"use strict"

function generateRandomNumbers() {
	let randomNumbers = []
	while (randomNumbers.length < 6) {
		const min = 1
		const max = 49
		const number = Math.floor(Math.random() * max - min + 1)
		if (!randomNumbers.includes(number)) {
			randomNumbers.push(number)
		}
	}
	return randomNumbers
}

generateRandomNumbers()

function checkResults(userNumbers, randomNumbers){

}