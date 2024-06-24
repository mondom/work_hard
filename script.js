'use strict'

class Animal {
	constructor(name, noise) {
		this.name = name
		this.noise = noise
	}
	sound() {
		console.log(`${this.name} doing ${this.noise}.`)
	}
}

const cat = new Animal('Cat', 'miau miau')

cat.sound()

class Dog extends Animal {
	constructor(name,noise,favToy){
		super(name, noise)
		this.favToy = favToy
		
	}
	play(){
		console.log(`The ${this.favToy} was thrown.`);
	}
}

const newAnimal = new Dog('Ciapek', 'hau hau', 'ball')

newAnimal.sound()
newAnimal.play()