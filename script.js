'use strict'

function Person() {
	let self = this
	self.name = ''
	self.setName = function (name) {
		self.name = name
	}
}

const person = new Person()
person.setName('Antoni')
console.log(person.name);