'use strict'

const person = {
	name: 'John',
	age: 30,
	city: 'New York',
}

Object.defineProperty(person, 'name', { enumerable: true })
Object.defineProperty(person, 'age', {
	enumerable: false,
})
Object.defineProperty(person, 'city', {
	enumerable: true,
})

// function printProperties(obj) {
// 	console.log(obj.name);
// 	console.log(obj.age);
// 	console.log(obj.city);
// }

function printProperties(obj) {
	for (let prop in obj) {
		console.log(prop + ": " + obj[prop]);
	}
}
printProperties(person)
