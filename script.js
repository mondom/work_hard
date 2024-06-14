'use strict'

const person = {
	surname: 'Rambo',
	print() {
		console.log(this.surname)
	},
}

setTimeout(person.print, 1000)

const print3 = person.print.bind(person)
setTimeout(print3, 1000)
