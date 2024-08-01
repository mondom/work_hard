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

const randomNumbers = generateRandomNumbers()

function checkResults(userNumbers, randomNumbers) {
	let matches = 0
	for (let i = 0; i < userNumbers.length; i++) {
		if (randomNumbers.includes(userNumbers[i])) {
			matches++
		}
	}
	return matches
}

const userNumbers = [2, 7, 15, 23, 30, 31]

const result = checkResults(userNumbers, randomNumbers)

console.log("Wylosowane liczby: " + randomNumbers.join(", "));
console.log("Twoje liczby: " + userNumbers.join(", "));

console.log("Liczba trafień: " + result);