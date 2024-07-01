'use strict'

class Person {
	constructor(name, age, address) {
		this._name = name
		this._age = age
		this._address = address
	}

	introduce() {
		console.log(`Cześć, nazywam się ${this._name}, mam ${this._age} lat i mieszkam w ${this._address}`)
	}

	changeAddress(newAddress) {
		this._address = newAddress
	}
}

const person1 = new Person('Jan Kowalski', 30, 'ul. Kwiatowa 1')

console.log(person1._name);

person1.introduce()

person1.changeAddress('ul. Sloneczna 10')

person1.introduce()



