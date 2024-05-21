'use strict'

const car1 = {
	make: 'Toyota',
	model: 'Corolla',

	startEngine() {
		console.log('Silnik został uruchomiony')
	},
	toggleEngine() {
		if (engineStatus === 'off') {
			engineStatus = 'on'
			console.log(engineStatus);
		} else {
			engineStatus = 'off'
			console.log(engineStatus);
		}
	},
}

let engineStatus = Symbol('engineStatus')
car1[engineStatus] = 'off'
car1.startEngine()
car1.toggleEngine()
car1.toggleEngine()
car1.toggleEngine()
car1.toggleEngine()
