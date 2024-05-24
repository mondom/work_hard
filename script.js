'use strict'

const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

let students = new Array()

students[0] = 'John'
students[1] = 'Emma'
students[2] = 'Michael'

console.log(students)

let grades = new Array()

grades[0] = 4
grades[1] = 3
grades[2] = 5

console.log(grades)

const assignStudents = (students, grades) => {
	for (let i = 0; i < students.length; i++) {
		console.log(`Students:\n${students[i]} - ${grades[i]}`);
	}
}

assignStudents(students, grades)
