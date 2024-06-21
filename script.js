'use strict'

// function Animal(name, type) {
// 	;(this.name = name), (this.type = type)
// }

// Animal.prototype.getDescription = function () {
// 	return `To jest ${this.type} o imieniu ${this.name}.`
// }

// const animal1 = new Animal('Burek', 'Pies')
// console.log(animal1.getDescription())


const animal = {
	type: 'Animal',
	displayType: function() {
	  console.log(this.type);
	console.log(this);
	}
  };
  
  const dog = Object.create(animal, {
	name: {
	  value: 'Rex',
	  writable: true,
	  enumerable: true,
	  configurable: true
	},
	bark: {
	  value: function() {
		console.log('Woof!');
	  },
	  writable: false,
	  enumerable: false,
	  configurable: false
	}
  });
  
  console.log(dog.name); // Output: Rex
  dog.bark(); // Output: Woof!
  dog.displayType(); // Output: Animal