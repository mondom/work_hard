'use strict'

// function Animal(name, type) {
// 	this.name = name,
// 	this.type = type
// }

// Animal.prototype.getDescription = function () {
// 	return `To jest ${this.type} o imieniu ${this.name}.`
// }

// const animal1 = new Animal('Burek', 'Pies')
// console.log(animal1.getDescription())

// function Dog(name) {
// 	Animal.call(this, name, 'Maltańczyk')
// }

// Dog.prototype = Object.create(Animal.prototype)

// Dog.prototype.bark = function(){
// 	console.log('Hau hau!');
// }
// const dog1 = new Dog('Reksio');
// console.log(dog1.getDescription());
// dog1.bark();

function Plant(name, type, color) {
	this.name = name,
	this.type = type, 
	this.color = color
}

Plant.prototype.showInfo = function(){
	console.log(`Ta roślina to ${this.name}. Jej nazwa gatunku to ${this.type}. Dominującym kolorem jest ${this.color}.`);
}

const plant1 = new Plant('Lipa', 'drzewo', 'zielony')

plant1.showInfo()


function Flower(name,type,color, smell){
	this.smell = smell
	Plant.call(this, name, type, color)
}

Flower.prototype = Object.create(Plant.prototype)

Flower.prototype.constructor = Flower

Flower.prototype.showSmell = function(){
	console.log(`Zapach ma ${this.smell}`);
}

const plant2 = new Flower('Stokrotka', 'kwiat', 'biel', 'kwiatowy')

plant2.showInfo()
plant2.showSmell()

console.log(plant1.constructor);
console.log(Object.getPrototypeOf(plant1));

console.log(plant2.constructor);
console.log(Object.getPrototypeOf(plant2));