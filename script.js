'use strict'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const calculatSum = arr => {
	return arr.reduce((sum, current) => {
		if (current > 5) {
			return (sum += current)
		} else {
			return sum
		}
	},0)
}

const result = calculatSum(arr)
console.log(result)
