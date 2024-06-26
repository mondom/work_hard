'use strict'

class Car {
	constructor(model) {
	  this.model = model;
	}
  
	static info() {
	  console.log('Class to create cars');
	  console.log(this.model); // undefined
	  console.dir(this); // Carr class
	}
  }
  
  const carObject = new Car('Opel');
  Car.info();
  
  carObject.info() // error
  



