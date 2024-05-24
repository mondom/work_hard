'use strict'

const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

const findMax = matrix => {
	let max = -Infinity
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] > max) {
				max = matrix[i][j]
			}
		}
	}
	return max
}

const maxElement = findMax(matrix)
console.log(`Największy element w macierzy: ${maxElement}`) // Największy element w macierzy: 9
