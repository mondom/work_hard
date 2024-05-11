'use strict'

class Person2 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHi() {
        console.log(`Hi, I'm ${this.name}`)
    } 

    showAge() {
        console.log(`I'm ${this.age} years old`)
    }
}

// =================================


const person2 = new Person2('Łukasz', 42)

console.log(person2);

person2.sayHi()
person2.showAge()


class Cat {
	constructor(name,age){
		this.name = name
		this.age = age
	}

	sayHi(){
		console.log(`Hello ${this.name}`);
	}
	sayYears(){
		console.log(`You are ${this.age} years old`);
	}
}

const Lucjan = new Cat('Lucjan', 6)

console.log(Lucjan);

Lucjan.sayHi()
Lucjan.sayYears()
