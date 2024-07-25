"use strict"

function* lotteryNumberGenerator() {
	const count = 5
	for (let i = 0; i < count; i++) {
		let randomNum = Math.floor(Math.random() * 100) + 1
		yield randomNum
	}
}

let generator = lotteryNumberGenerator()

// for (let number of generator) {
// 	console.log(number);
// }

// console.log(generator.next().value); // Wywołuje generator i zwraca pierwszą wartość
// console.log(generator.next().value); // Wywołuje generator i zwraca drugą wartość
// console.log(generator.next().value); // Wywołuje generator i zwraca trzecią wartość
// console.log(generator.next().value); // Wywołuje generator i zwraca czwartą wartość
// console.log(generator.next().value); // Wywołuje generator i zwraca piątą wartość
// console.log(generator.next().done);  // Zwraca true, ponieważ generator zakończył działanie


// let numbers = [...generator]; // Rozwija wartości generatora do tablicy

// console.log(numbers); // Wypisuje tablicę z wygenerowanymi liczbami

let [first, second, third, fourth, fifth] = generator;

console.log(first, second, third, fourth, fifth); // Wypisuje pięć wygenerowanych liczb


