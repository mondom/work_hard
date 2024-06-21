'use strict'

const TemperatureTracker = {
	temperatures: [],

	get average() {
		const total = this.temperatures.reduce((acc, cur) => {
			return acc + cur
			
		}, 0)
		return total / this.temperatures.length
	},
	get max(){
		const max = Math.max(...this.temperatures)
		return max
		
	},
	get min(){
		const min = Math.min(...this.temperatures)
		return min
		
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
console.log('Najwyzsza temperatura:', TemperatureTracker.max)
console.log('Najnizsza temperatura:', TemperatureTracker.min)
