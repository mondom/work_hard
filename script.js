'use strict'

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function calculateSum(arr) {
	if (arr.length === 0) {
		return 0
	}

	let firstElement = arr[0]
	let sum = 0

	if (firstElement > 5) {
		sum += firstElement
	}

	let remainingArray = arr.slice(1)


	let recursiveSum = calculateSum(remainingArray)
	sum += recursiveSum
  return sum
}

const result = calculateSum(arr)
console.log(result);
