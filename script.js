'use strict'

// const calculateFactorial = num => {
// 	if (num === 0 || num === 1) {
// 		return 1
// 	}

// 	let factorial = calculateFactorial(num - 1)
// 	console.log(num);
// 	factorial *= num
// 	return factorial
// }

// let num = 5

// const result = calculateFactorial(num)

// console.log('Silnia liczby', num, 'to:', result)

function collatz(n) {
	if (n === 1) {
		return 1
	}

	return n % 2 === 0 ? collatz(n / 2) : collatz(3n + 1)
}
