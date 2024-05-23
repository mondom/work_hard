'use strict'

const grades = [2, 4, 5, 4, 4, 3];
 
const calculateAverage = (grades) => {
	const sum = grades.reduce((total, grade) => total + grade, 0);
	const average = sum / grades.length;
	return average;
};

const findTopStudent = (grades) => {
	let maxGrade = 0;
	let topStudent = "";

	for (const grade of grades) {
		if (grade > maxGrade) {
			maxGrade = grade;
			topStudent = `Uczen ${maxGrade}`;
		}
	}

	return topStudent;
};

const averageGrade = calculateAverage(grades);
const topStudentName = findTopStudent(grades);

console.log(`Srednia ocena: ${averageGrade.toFixed(2)}`);
console.log(`Uczen z najwyzsza ocena: ${topStudentName}`);
