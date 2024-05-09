'use strict'

function Person(name, age, hobby) {
	this.name = name
	this.age = age
	this.hobby = hobby
}

Person.prototype.hello = function(){
	console.log(`hello ${this.name}`);
}

const person1 = new Person('Monika', 34, 'siatkówka')
const person2 = new Person('Łukasz', 42, 'zarządzanie')
const person3 = new Person('Lucjan', 6, 'spanko')

console.log(person1)
console.log(person2)
console.log(person3)
person1.hello()
person2.hello()
person3.hello()
