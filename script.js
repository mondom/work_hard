'use strict'

const students = [
	{ id: 1, firstName: "John", lastName: "Doe" },
	{ id: 2, firstName: "Jane", lastName: "Smith" },
	{ id: 3, firstName: "David", lastName: "Johnson" },
];

const studentSet = new Set();

for (const student of students) {
	studentSet.add(student);
}

console.log("[Numer identyfikacyjny studentow]");
for (const student of studentSet.keys()) {
	console.log(student.id);
}

console.log("[Imiona i nazwiska studentow]");
for (const student of studentSet.values()) {
	console.log(student.firstName, student.lastName);
}

console.log("[Dane studentow]");
for (const entry of studentSet) {
	
	console.log(entry.id, entry.firstName, entry.lastName);
}

