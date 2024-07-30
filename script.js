"use strict"

const celsiusValue = 25
const fahrenheitValue = 77
const kelvinValue = 298.15

function celsiusToFahrenheit(celsius) {
	const celToFahr = (celsius * 9) / 5 + 32
	return celToFahr
}

function celsiusToKelvin(celsius) {
	const celToKel = celsius + 273.15
	return celToKel
}

function fahrenheitToCelsius(fahrenheit) {
	const fahrToCel = ((fahrenheit - 32) * 5) / 9
	return fahrToCel
}

function fahrenheitToKelvin(fahrenheit) {
	const fahrToKel = (((fahrenheit + 459.67) * 5) / 9).toFixed(2)

	return fahrToKel
}

function kelvinToCelsius(kelvin) {
	const kelToCel = kelvin - 273.15
	return kelToCel
}

function kelvinToFahrenheit(kelvin) {
	const kelToFahr = ((kelvin * 9) / 5 - 459.67).toFixed(2)
	return kelToFahr
}

console.log(
	`${celsiusValue} stopni Celsiusza = ${celsiusToFahrenheit(
		celsiusValue
	)} stopni Fahrenheita`
)

console.log(
	`${celsiusValue} stopni Celsiusza = ${celsiusToKelvin(
		celsiusValue
	)} stopni Kelvina`
)

console.log(
	`${fahrenheitValue} stopni Fahrenheita = ${fahrenheitToCelsius(
		fahrenheitValue
	)} stopni Celsiusza`
)

console.log(
	`${fahrenheitValue} stopni Fahrenheita = ${fahrenheitToKelvin(
		fahrenheitValue
	)} stopni Kelvina`
)

console.log(
	`${kelvinValue} stopni Kelvina = ${kelvinToCelsius(
		kelvinValue
	)} stopni Celsiusza`
)

console.log(
	`${kelvinValue} stopni Kelvina = ${kelvinToFahrenheit(
		kelvinValue
	)} stopni Fahrenheita`
)
