'use strict'

const students = [
	{
		name: 'Jan',
		surname: 'Kowalski',
		age: 21,
		index: '12345',
		grades: [4, 5, 3, 2],
	},
	{
		name: 'Anna',
		surname: 'Nowak',
		age: 22,
		index: '23456',
		grades: [5, 5, 5, 4],
	},
	{
		name: 'Piotr',
		surname: 'Wisniewski',
		age: 20,
		index: '34567',
		grades: [3, 3, 2, 2],
	},
]

const calculateAverageGrade = students => {
	let averageGrades = {}

	for (const studentGrades of students) {
		const average =
			studentGrades.grades.reduce(function (a, b) {
				return a + b
			}, 0) / studentGrades.grades.length
		const surname = studentGrades.surname
		averageGrades[surname] = average
	}
	const sumAll = Number((Object.values(averageGrades).reduce((a, b) => a + b, 0) / Object.keys(averageGrades).length).toFixed(2))


	console.log(sumAll)

	// students.map(obj => {
	// 	const studentName = obj.name
	// 	const value =
	// 		obj.grades.reduce(function (accumulator, currentValue) {
	// 			return accumulator + currentValue
	// 		}, 0) / obj.grades.length

	//         averageGrades[studentName] = value
	// })
}

calculateAverageGrade(students)
