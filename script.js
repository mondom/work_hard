'use strict'

const user = {
	name: 'Monika',
	mail: 'mdominik@vp.pl',
	password: 'kitty1234',

	get pass() {
		console.log(this.password)
	},

	set newName(name) {
		this.name = name
	},
}
console.log(user.name);

user.newName = 'Karolina'

Object.defineProperty(user, "password",{
	writable: false,
})

console.log(user.name);

user.pass

// const person = {
// 	name: 'John',
// 	age: 30,
// 	get info() {
// 		return `${this.name} is ${this.age} years old`
// 	},
// 	set updateName(newName) {
// 		this.name = newName
// 	},
// }

// console.log(person.info) // Dostęp do właściwości jak do zwykłej wartości
// person.updateName = 'Jane' // Aktualizacja właściwości jak zwykłej wartości
// console.log(person.name)
