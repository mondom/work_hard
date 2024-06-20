'use strict'

const TemperatureTracker = {
	temperatures: [],

	get average() {
		const sum = this.temperatures.reduce((acc, cur) => acc + cur, 0)
		return sum / this.temperatures.length
	},

	addTemperature(temp) {
		this.temperatures.push(temp)
	},
}

TemperatureTracker.addTemperature(25)
TemperatureTracker.addTemperature(30)
TemperatureTracker.addTemperature(20)
TemperatureTracker.addTemperature(35)

console.log(TemperatureTracker.temperatures)

console.log('Srednia temperatura:', TemperatureTracker.average)
// console.log('Najwyzsza temperatura:', TemperatureTracker.max)
// console.log('Najnizsza temperatura:', TemperatureTracker.min)
