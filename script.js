'use strict'

// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
// // =================================

// Person.prototype.sayHi = function () {
//     console.log(`Hi, I'm 	${this.name}`)
// }

// Person.prototype.showAge = function () {
//     console.log(`I'm ${this.age} 	years old`)
// }

class Person{
	constructor(name, age){
		this.name = name
		this.age = age
	}

	sayHi(){
		console.log(`Hi, I'm ${this.name}.`);
	}

	showAge(){
		console.log(`I'm ${this.age} years old.`);
	}
}

const me = new Person('Monika', '35')

me.sayHi()
me.showAge()