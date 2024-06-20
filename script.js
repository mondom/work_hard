'use strict'

const person1 = {
	firstName: 'John',
	get name() {
		return this.firstName
	},
	set name(name) {
		this.firstName = name
	},
}

person1.name = 'Rambo'
console.log(person1.name) // 'Rambo'

const person2 = {
	_name: 'Rambo ma kota',
	get name() {
		console.log(this._name.split(' ').reverse()); 
	},
	set name(name) {
		this._name = name.toUpperCase()
	},
}

person2.name
person2.name = 'Oliwia'
person2.name