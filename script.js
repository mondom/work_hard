"use strict"

function* lotteryNumberGenerator() {
	const count = 5
	for (let i = 0; i < count; i++) {
		let randomNum = Math.floor(Math.random() * 100) + 1
		yield randomNum
	}
}

let generator = lotteryNumberGenerator()

for (let number of generator) {
	console.log(number);
}