'use strict'

function calculateFutureDate() {

	let currentDate = new Date()

	currentDate.setFullYear(currentDate.getFullYear())
	console.log(currentDate.getFullYear() + 3);
	currentDate.setMonth(currentDate.getMonth())
	currentDate.setDate(15)
	currentDate.setHours(18)
	currentDate.setMinutes(30)
	currentDate.setSeconds(45)
	currentDate.setMilliseconds(500)
	console.log(`Future Date: ${currentDate.toLocaleString()}`)
}

calculateFutureDate()
