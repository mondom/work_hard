'use strict'

function Animal(name, type) {
	this.name = name, 
	this.type = type
}

Animal.prototype.getDescription = function () {
	return `To jest ${this.type} o imieniu ${this.name}.`
}

const animal1 = new Animal('Burek', 'Pies')
console.log(animal1);
console.log(animal1.getDescription())

function Dog(name) {
	Animal.call(this, name, 'Maltańczyk')
	
}
Dog.prototype = Object.create(Animal.prototype)

const dog1 = new Dog('Reksio');
console.log(dog1.getDescription());



