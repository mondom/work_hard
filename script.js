"use strict"

function generateRandomNumber() {
	const num = Math.floor(Math.random() * 100) + 1
	console.log(num);
	return num
}

function guessNumber(userGuess, randomNumber) {
	if (userGuess === randomNumber) {
		console.log("Gratulacje, zgadłeś!")
	} else if (userGuess < randomNumber) {
		console.log("Wylosowana liczba jest wieksza.")
	} else if (userGuess > randomNumber) {
		console.log("Wylosowana liczba jest mniejsza.")
	}
}

const randomNumber = generateRandomNumber()
const userGuess = 55

guessNumber(userGuess, randomNumber)
