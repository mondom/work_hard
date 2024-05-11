'use strict'

class Vegetable {
	constructor(name, color) {
		this.name = name
		this.color = color
	}

	description() {
		console.log(`${this.name} have ${this.color} color`)
	}
}

const potato = new Vegetable('Potato', 'red')
console.log(potato)
potato.description()

class Fruit extends Vegetable {
	constructor(name, color, size) {
		super(name, color)
		this.size = size
	}
	description(){
		console.log(`${this.name} have ${this.color} color and is very ${this.size}`)
	}
}

const apple = new Fruit('Apple', 'green', 'small')
console.log(apple)
apple.description()
