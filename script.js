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

let copyObj = {}

Object.assign(copyObj, person)

person.name = "Anita"



let copySubordinateObj = {}

Object.assign(copySubordinateObj, person.address)


copyObj.address = copySubordinateObj
person.address.street = 'test'
console.log(person);
console.log(copySubordinateObj);
console.log(copyObj);