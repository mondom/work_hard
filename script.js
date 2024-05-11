'use strict'

class Vegetable {
	constructor(name,color){
		this.name = name
		this.color = color
	}

	description(){
		console.log(`${this.name} have ${this.color} color`);
	}
}

const potato = new Vegetable('potato', 'red')
console.log(potato);
potato.description()