'use strict'

const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

const dest = (matrix)=>{
	for (let i = 0; i < matrix.length; i++) {
		const [one, two, three] = matrix[i]
		
		console.log(`Wiersz ${i + 1}: ${one}, ${two}, ${three}`);
	}
	
}

dest(matrix)



const sumRows = matrix => {
	let sums = []
	for (let i = 0; i < matrix.length; i++) {
		let sumRows = 0
		for (let j = 0; j < matrix[i].length; j++) {
			sumRows += matrix[i][j]
		}
		sums.push(sumRows)
	}
	return sums
}

const result = sumRows(matrix)
console.log(result)
