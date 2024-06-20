'use strict'

const TemperatureTracker ={
	temperatures: [],

	get average(){
		this.temperatures.reduce((acc,curr)=>{
			return acc+=curr / this.temperatures.length
		})
	},

	addTemperature(temp){
		this.temperatures.push(temp)
	}
}