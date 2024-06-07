'use strict'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const calculatSum = arr => {
	if (arr.length === 0) {
		return 0
	}
	let sum = 0
	const firstElement = arr[0]

	let newArr = arr.slice(1)
	if (firstElement > 5) {
		sum += firstElement
	}

	const recusiveSum = calculatSum(newArr)
	sum += recusiveSum
	return sum
}

const result = calculatSum(arr)
console.log(result)
