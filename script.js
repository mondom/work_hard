"use strict"

function calculateParkingFee(hours) {
	const baseRate = 10
	const hourlyRate = 5

	if (hours <= 0) {
		return 0
	} else if (hours === 1) {
		return 10
	} else {
		const additionalHours = hours - 1
		const result = additionalHours * hourlyRate + baseRate
		return result
	}
}

const parkedHours = 10

const result = calculateParkingFee(parkedHours)

console.log(`Oplata parkingowa za ${parkedHours} godzin(y) wynosi ${result} zl`)
