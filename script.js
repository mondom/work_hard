'use strict'

const car = {}
console.log("Poczatkowy obiekt 'car':", car)

Object.defineProperty(car, 'brand', {
	value: 'Toyota',
	writable: false,
	enumerable: true,
	configurable: false,
})

Object.defineProperty(car, 'model', {
	value: 'Camry',
	writable: false,
	enumerable: true,
	configurable: false,
})
console.log("Zmodyfikowany obiekt 'car':", car)

car.brand = "Honda";
console.log("Obiekt 'car' po probie zmiany wlasciwosci 'brand':", car);

delete car.model;
console.log("Obiekt 'car' po probie usuniecia wlasciwosci 'model':", car);





