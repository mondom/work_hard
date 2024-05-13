'use strict'

let person = {
	name: 'John Doe',
	age: 30,
	address: {
		street: 'Main Street',
		city: 'City',
		country: 'Country',
	},
}

const cloneObject = (source, target) => {
    Object.assign(target, source)
}

const clonePerson = {}

cloneObject(person, clonePerson)

person.name = "Jane Smith";
person.age = 25;
person.address.city = "New City";

console.log("Original person:", person);
console.log("Cloned person:", clonePerson);